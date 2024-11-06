const WebSocket = require('ws');
const { Sequelize, Op } = require('sequelize');  
const { Upcoming, Inplay, League, Team, Ended, PrematchOdds, InplayOdds, User, FavGames } = require("../models");
const {isEmpty, analSoccerInplayResponse} = require("../utils/isEmpty");
const league = require('../models/league');

const topMatches = ["World Cup 2026", "England Premier League", "UEFA Champions League", "UEFA Europa League", "UEFA Super Cup", "Spain La Liga"];
const sendLiveEvent = async(ws) => {
  const isSendLive = ws.live == 'on';
  if(!isSendLive) {
    return;
  }
  const detail_id = ws.detail_id;
  let sid = ws.lsport;
  try {
    if(ws.userCode == undefined) {
      const u = await User.findOne({token:ws.token});
      ws.userCode = u.userCode;
    }
    
    const whereObj = {};

    if(ws.lsport != 0 && ws.lsport != undefined) {
      whereObj.sport_id = sid;
    }
    if(detail_id != 0) {
      whereObj.id = detail_id;
    }

    const data = await Inplay.findAll({
      include: [
        {
            model: InplayOdds,
            attributes: ["data"],            
        },
      ],
      where:whereObj,
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
      page: ws.page,
      data
    }))
  }
  catch(e) {
    console.log(e);
  }

}

const sendPrematchEvent = async(ws) => {
  const isSendPrematch = ws.prematch == 'on';
  if(!isSendPrematch) {
    return;
  }
  let sid = ws.psport;  //if not defined, we have to send soccer data
  try {
    const now = Date.now() / 1000;
    const detail_id = ws.detail_id;
    const whereObj = {
      time: {
        [Op.gt]: now
      },
      time_status:0,
    };

    if(ws.psport != 0 && ws.psport != undefined) {
      whereObj.sport_id = sid;
    }
    if(detail_id != 0) {
      whereObj.id = detail_id;
    }
    const tops = await Upcoming.findAll({
      include: [
        {
            model: PrematchOdds,
            attributes: ["data"],            
        },
      ],
      where:{
        ...whereObj,
        league_name:{[Op.in]:topMatches}
      },
      limit: 10, // Limit to 30 records  
      raw:true
    })
    const data = await Upcoming.findAll({
      include: [
        {
            model: PrematchOdds,
            attributes: ["data"],            
        },
      ],
      where:whereObj,
      limit: 10, // Limit to 30 records  
      raw:true
    });
    
    tops.forEach(element => {
      const obj = element['prematchOdd.data'];
      try {
        element.data = JSON.parse(obj);
      }catch(e) {
        element.data = {};
      }
      delete element["prematchOdd.data"];
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
      page: ws.page,
      data,
      tops
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
              ws.token = o.token;
              ws.page = o.page;
              ws.live = o.live;
              ws.lsport = o.lsport;
              ws.prematch = o.prematch;
              ws.psport = o.psport;
              ws.detail_id = o.detail_id;
              ws.data1 = o.data1;             
              ws.data2 = o.data2;             
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
