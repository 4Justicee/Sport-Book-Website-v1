const WebSocket = require('ws');
const { Sequelize, Op } = require('sequelize');  
const { Upcoming, Inplay, League, Team, Ended, PrematchOdds, InplayOdds, User, FavGames } = require("../models");
const {isEmpty, analSoccerInplayResponse} = require("../utils/isEmpty")



const sendLiveEvent = async(ws) => {
  const info = ws.live_info;
  let sid = 1;  //if not defined, we have to send soccer data 
  try {
    if(info != undefined) {
      sid = info.sid;
      if(info.need == 0) {
        return; 
      }
    }

    if(ws.userCode == undefined) {
      const u = await User.findOne({token:ws.token});
      ws.userCode = u.userCode;
    }

    const now = Date.now();
    const data = await Inplay.findAll({
      include: [
        {
            model: InplayOdds,
            attributes: ["data"],            
        },
      ],
      where:{
        sport_id: sid
      },
      raw:true
    });

    for(let i = 0; i < data.length; i++) {
      const element = data[i];
      try {
        const fav = await FavGames.findAll({where:{matchId: element.id, userCode: ws.userCode}});
        const o = analSoccerInplayResponse(JSON.parse(element["inplayodd.data"]));
        element.is_fav = isEmpty(fav) ?  0 : 1;
        element.data = o.odd;
        element.scores = o.current_score;
        element.names = o.names;
        element.passed_second = o.passed_second;
      }catch(e) {
        element.data = {};
      }
      delete element["inplayodd.data"];

    }

    ws.send(JSON.stringify({
      type: "live",
      data
    }))
  }
  catch(e) {
    console.log(e);
  }

}

const sendPrematchEvent = async(ws) => {
  const info = ws.prematch_info;
  let sid = 1;  //if not defined, we have to send soccer data
  try {
    if(info != undefined) {
      sid = info.sid;
      if(info.need == 0) {
        return;
      }
    }
    const now = Date.now() / 1000;

    const data = await Upcoming.findAll({
      include: [
        {
            model: PrematchOdds,
            attributes: ["data"],            
        },
      ],
      where:{
        sport_id: sid,
        time: {
          [Op.gt]: now
        },
        time_status:0,
      },
      limit: 10, // Limit to 30 records  
      raw:true
    });
    data.forEach(element => {
      const obj = element['prematchOdd.data'];
      try {
        element.data = JSON.parse(obj);
      }catch(e) {
        element.data = {};
      }

      delete element["prematchOdd.data"];
    });
    ws.send(JSON.stringify({
      type: "prematch",
      data
    }))
  }
  catch(e) {
    console.log(e);
  }
}

module.exports = async () => {
    try {
        const wss = new WebSocket.Server({ port: 9990 });

        wss.on('connection', (ws) => {
            console.log('New client connected!');

            setInterval(async ()=>{
              await sendLiveEvent(ws);
            }, 2000);

            setInterval(async ()=>{
              await sendPrematchEvent(ws);
            }, 5000);

            // Handle messages received from the client
            ws.on('message', (message) => {
                           
              const o = JSON.parse(message);
              if(o.type == 'token') {                
                ws.token = o.token;
              }

              if(o.type == 'live') {
                ws.live_info = {
                  sid: o.sid,                 
                }
                if(o.allow != "both") {
                  ws.prematch_info.need = 0;
                }
              }
              if(o.type == 'prematch') {
                ws.prematch_info = {
                  sid: o.sid,                 
                }
                if(o.allow != "both") {
                  ws.live_info.need = 0;
                }
              }
            });
          
            // Handle client disconnection
            ws.on('close', () => {
              console.log('Client disconnected');
            });
        });
    } catch (error) {
        console.log(error)
    }
};
