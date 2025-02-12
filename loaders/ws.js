const WebSocket = require('ws');
const { Sequelize, Op } = require('sequelize');  
const { Upcoming, Inplay, League, Team, Ended, PrematchOdds, InplayOdds, User, FavGames } = require("../models");
const {isEmpty, analSoccerInplayResponse} = require("../utils/isEmpty");
const league = require('../models/league');

const topMatches = ["World Cup 2026", "England Premier League", "UEFA Champions League", "UEFA Europa League", "UEFA Super Cup", "Spain La Liga"];
const highLightMatches = ["World Cup 2026", "England Premier League", "UEFA Champions League", "UEFA Europa League", "UEFA Super Cup", "Spain La Liga", "France Ligue 1", "Italy Serie A", "Germany Bundesliga I"];
const highTeams = ["Real Madrid", "Barcelona", "Manchester City", "Man Utd", "Liverpool", "Arsenal", "Man City", "Tottenham", "Bayern Munich", "Borussia Dortmund", "Bayer Leverkusen", "PSG","Juventus","AC Milan","Inter Milan","Atletico Madrid"];

const sportIds = [1, 13, 78, 2, 17, 12, 83, 92, 8, 36, 9, 90, 110, 151, 148, 18, 91, 16, 4, 14, 3, 15, 94, 19, 66, 75, 95, 107, 162];

const sportsList = {
  1: {
      name: 'Soccer',
      icon : 'football'
  },
  18: {
      name: 'Basketball',
      icon : 'basketball'
  },
  13: {
      name: 'Tennis',
      icon : 'tennis'
  },
  91: {
      name: 'Volleyball',
      icon : 'volly'
  },
  78: {
      name: 'Handball',
      icon : 'handball'
  },
  16: {
      name: 'Baseball',
      icon : 'baseball'
  },
  2: {
      name: 'Horse Racing',
      icon : 'horse'
  },
  4: {
      name: 'Greyhounds',
      icon : 'greyhound',
      png: true,
  },
  17: {
      name: 'Ice Hockey',
      icon : 'icehockey'
  },
  14: {
      name: 'Snooker',
      icon : 'snooker',
      png: true,
  },
  12: {
      name: 'American Football',
      icon : 'afootball'
  },
  3: {
      name: 'Cricket',
      icon : 'cricket'
  },
  83: {
      name: 'Futsal',
      icon : 'futsal',
      png:true,
  },
  15: {
      name: 'Darts',
      icon : 'darts'
  },
  92: {
      name: 'Table Tennis',
      icon : 'ttennis'
  },
  94: {
      name: 'Badminton',
      icon : 'badminton',
      png:true,
  },
  8: {
      name: 'Rugby Union',
      icon : 'rugby',
      png:true,
  },
  19: {
      name: 'Rugby League',
      icon : 'rugby',
      png:true,
  },
  36: {
      name: 'Australian Rules',
      icon : 'rules',
      png:true,
  },
  66: {
      name: 'Bowls',
      icon : 'bowls',
      png:true,
  },
  9: {
      name: 'Boxing',
      icon : 'boxing',
      png:true,
  },
  75: {
      name: 'Gaelic Sports',
      icon : 'gsport',
      png:true,
  },
  90: {
      name: 'Floorball',
      icon : 'floorball',
      png:true,
  },
  95: {
      name: 'Beach Volleyball',
      icon : 'bvolleyball',
      png:true,
  },
  110: {
      name: 'Water Polo',
      icon : 'polo',
      png:true,
  },
  107: {
      name: 'Squash',
      icon : 'squash',
      png:true,
  },
  151: {
      name: 'E-sports',
      icon : 'esport',
      png:true,
  },
  162: {
      name: 'MMA',
      icon : 'mma',
      png:true,
  },
  148: {
      name: 'Surfing',
      icon : 'surfing',
      png:true,
  },
}


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
    
    let whereObj = {};
    if(ws.lsport != 0 && ws.lsport != undefined) {
      whereObj.sport_id = sid;
    }

    let data = [];
    if(ws.page == "home") {
      data = await getLiveHomeData(whereObj, ws);
    }   
    if(ws.page == "sport") {
      data = await getLiveSportData(whereObj, ws);
    }
    ws.send(JSON.stringify({
      type: "live",
      page: ws.page,
      current_page: ws.data1,
      data
    }))
  }
  catch(e) {
    console.log(e);
  }

}

const getPrematchHomeData = async(whereObj, ws) => {
  const today = new Date(); // current date        
  const seed = Number(`${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}`);  
  const tops = await Upcoming.findAll({
    include: [
      {
          model: PrematchOdds,
          attributes: ["data"],            
      },
    ],
    where:{
      ...whereObj,
      [Op.or]: [  
        {  
          league_name: {  
            [Op.in]: topMatches  
          }  
        },  
        {  
          home_name: {  // Checking for highTeams in home_team_name  
            [Op.in]: highTeams  
          }  
        },  
        {  
          away_name: {  // Checking for highTeams in away_team_name  
            [Op.in]: highTeams  
          }  
        },
        {
          is_top: 1
        }
      ]  
    },
    order: Sequelize.literal(`RAND(${seed})`),  
    limit: 10, // Limit to 30 records  
    raw:true
  })

  tops.forEach(element => {
    const obj = element['prematchOdd.data'];
    try {
      element.data = JSON.parse(obj);
    }catch(e) {
      element.data = {};
    }
    delete element["prematchOdd.data"];
  });

  const data = await Upcoming.findAll({
    include: [
      {
          model: PrematchOdds,
          attributes: ["data"],            
      },
    ],
    where: {
      ...whereObj,
      [Op.or]: [  
        {  
          league_name: {  
            [Op.in]: highLightMatches  
          }  
        },  
        {  
          home_name: {  // Checking for highTeams in home_team_name  
            [Op.in]: highTeams  
          }  
        },  
        {  
          away_name: {  // Checking for highTeams in away_team_name  
            [Op.in]: highTeams  
          }  
        },
        {
          is_hightlight:1
        }
      ]  
    },
    raw:true
  });   

  for(let i = 0; i < data.length; i++) {
    const element = data[i];
    try {
      const fav = await FavGames.findAll({where:{matchId: element.id, userCode: ws.userCode}});
      element.is_fav = isEmpty(fav) ?  0 : 1;
      element.data = JSON.parse(element["prematchOdd.data"]);
    }catch(e) {
      element.data = {};
    }
    delete element["prematchOdd.data"];
  }

  return {tops, data}
}

const getLiveHomeData = async(whereObj, ws) => {
  whereObj = {
    ...whereObj,
    [Op.or]: [  
      {  
        league_name: {  
          [Op.in]: highLightMatches  
        }  
      },  
      {  
        home_name: {  // Checking for highTeams in home_team_name  
          [Op.in]: highTeams  
        }  
      },  
      {  
        away_name: {  // Checking for highTeams in away_team_name  
          [Op.in]: highTeams  
        }  
      },
      {
        is_hightlight: 1
      } 
    ]  
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
  return data;
}

const getPrematchSportData = async(whereObj, ws) => {  
  if(!isEmpty(ws.data2)) {
    whereObj = {
      ...whereObj,
      [Op.or]: [  
        {  
          league_name: {  
            [Op.substring]: ws.data2  
          }  
        },  
        {  
          home_name: {  // Checking for highTeams in home_team_name  
            [Op.substring]: ws.data2  
          }  
        },  
        {  
          away_name: {  // Checking for highTeams in away_team_name  
            [Op.substring]: ws.data2  
          }  
        }  
      ]  
    };
  }

  const findObj = {
    include: [
      {
          model: PrematchOdds,
          attributes: ["data"],            
      },
    ],
    where: whereObj,    
    raw:true
  };

  if(!isEmpty(ws.data1)) {
    findObj.offset = (ws.data1 - 1) * 10;
    findObj.limit = 10;
  }

  const data = await Upcoming.findAndCountAll(findObj);   

  for(let i = 0; i < data.rows.length; i++) {
    const element = data.rows[i];
    try {
      const fav = await FavGames.findAll({where:{matchId: element.id, userCode: ws.userCode}});
      element.is_fav = isEmpty(fav) ?  0 : 1;
      element.data = JSON.parse(element["prematchOdd.data"]);
    }catch(e) {
      element.data = {};
    }
    delete element["prematchOdd.data"];
  }
  return data;
}

const getLiveSportData = async(whereObj, ws) => {
  if(!isEmpty(ws.data2)) {
    whereObj = {
      ...whereObj,
      [Op.or]: [  
        {  
          league_name: {  
            [Op.substring]: ws.data2  
          }  
        },  
        {  
          home_name: {  // Checking for highTeams in home_team_name  
            [Op.substring]: ws.data2  
          }  
        },  
        {  
          away_name: {  // Checking for highTeams in away_team_name  
            [Op.substring]: ws.data2  
          }  
        }  
      ]  
    };
  }

  const findObj = {
    include: [
      {
          model: InplayOdds,
          attributes: ["data"],            
      },
    ],
    where:whereObj,
    raw:true
  };

  if(!isEmpty(ws.data1)) {
    findObj.offset = (ws.data1 - 1) * 10;
    findObj.limit = 10;
  }

  const data = await Inplay.findAndCountAll(findObj);
  for(let i = 0; i < data.rows.length; i++) {
    const element = data.rows[i];
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
  return data;
}

const sendPrematchEvent = async(ws) => {
  const isSendPrematch = ws.prematch == 'on';
  if(!isSendPrematch) {
    return;
  }
  let sid = ws.psport;  //if not defined, we have to send soccer data
  try {
    const now = Date.now() / 1000;
    let whereObj = {
      time: {
        [Op.gt]: now
      },
      time_status:0,
    };

    if(ws.psport != 0 && ws.psport != undefined) {
      whereObj.sport_id = sid;
    }
    
    let tops = [], data;
    if(ws.page == "home") {      
      const o = await getPrematchHomeData(whereObj, ws);
      tops = o.tops;
      data = o.data;
    }
    if(ws.page == "sport") {
      data = await getPrematchSportData(whereObj, ws);
    }

    ws.send(JSON.stringify({
      type: "prematch",
      page: ws.page,
      current_page: ws.data1,      
      data,
      tops
    }))
  }
  catch(e) {
    console.log(e);
  }
}

const sendMatchList = async(ws) => {
  const totalLive = await Inplay.findAll({  
    attributes: [  
      'sport_id',  
      [Sequelize.fn('COUNT', Sequelize.col('sport_id')), 'total_count']  // "AS" count alias  
    ],      
    group: ['sport_id'],  // Grouping by the sport_id column  
    raw:true
  })
  const now = Date.now() / 1000;
  const totalPrematch = await Upcoming.findAll({  
    attributes: [  
      'sport_id',  
      [Sequelize.fn('COUNT', Sequelize.col('sport_id')), 'total_count']  // "AS" count alias  
    ],  
    where:{time_status: 0, time: {
      [Op.gt]: now
    }},
    group: ['sport_id'],  // Grouping by the sport_id column  
    raw:true
  })

  totalLive.forEach(element => {
    element.sport_name = sportsList[element.sport_id].name;
    element.icon = sportsList[element.sport_id].icon;
    element.png = sportsList[element.sport_id].png;
  });

  totalPrematch.forEach(element => {
    element.sport_name = sportsList[element.sport_id].name;
    element.icon = sportsList[element.sport_id].icon;
    element.png = sportsList[element.sport_id].png;
  });
  ws.send(JSON.stringify({
    type:'game_count',
    totalPrematch,
    totalLive
  }))
}

module.exports = async () => {
  try {
      const wss = new WebSocket.Server({ port: 9990 });
      wss.on('connection', async(ws) => {
          console.log('New client connected!');

          setInterval(async ()=>{
            await sendLiveEvent(ws);
          }, 2000);
          
          setInterval(async ()=>{
            await sendPrematchEvent(ws);
          }, 5000);

          setInterval(async ()=>{
            await sendMatchList(ws);
          }, 5000);

          ws.prematch = "on";
          ws.live = "on";
          ws.page = "home";

          await sendLiveEvent(ws);
          await sendPrematchEvent(ws);
          await sendMatchList(ws);

          // Handle messages received from the client
          ws.on('message', (message) => {                           
            const o = JSON.parse(message);
            console.log(o)
            ws.token = o.token;
            ws.page = o.page;
            ws.live = o.live;
            if(!isEmpty(o.lsport)) {
              ws.lsport = o.lsport;
            }
            ws.prematch = o.prematch;
            if(!isEmpty(o.psport)) {
              ws.psport = o.psport;
            }
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
