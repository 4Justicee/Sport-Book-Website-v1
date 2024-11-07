const { Contact, Agent, User, FavGames, Upcoming, PrematchOdds, InplayOdds, Inplay, MyBet} = require("../models");
const axios = require("axios");
const md5 = require('md5');

const config = require("../config/main")
const {isEmpty, analSoccerInplayResponse} = require("../utils/isEmpty")

const requestTo = async (comment, type, url, data = {}) => {
    try {        

        const instance = axios.create({
            timeout: 1000 * 6,
        });

        let response;

        if (type.toUpperCase() == "GET") {
            response = await instance.get(url, { params: data });
        } else if (type.toUpperCase() == "POST") {           
            response = await instance.post(url, data );
        }

          
        return response.data;

    } catch (error) {
        console.log(error);

        return {};
    }
};

exports.saveContact = async (req, res) => {
    try {
        const {email, phone, message, name} = req.body;

        Contact.create({
            name,
            email,
            phone,
            message
        })

        return res.json({
            status: 1
        });
    } catch (error) {
        console.log(error.stack);
        

        return res.json({
            status: 0,
            msg: ERR_MSG.INTERNAL_ERROR,
        });
    }
};

exports.playDemo = async (req, res) => {
    try {
        const {p, key} = req.body;
        const u = md5(Date.now());
        const data = {
            masterCode: config.agent,
            masterToken: config.token,
            playerCode: u,
            gameType: 'slot',
            providerCode: p,
            gameCode : key,
            lang: 'en',
            depositAmount: 100
        };
        const result = await requestTo('Play slot game', 'POST', config.api + "/gameRun", data);

        return res.json({
            status: 1,
            url: result.launchUrl
        });

        
    } catch (error) {
        console.log(error.stack);        

        return res.json({
            status: 0,
            msg: ERR_MSG.INTERNAL_ERROR,
        });
    }
};

exports.registerFavorite = async (req, res) => {
    try {
        const {type, tid, token, data, d1} = req.body;
        const u = await User.findOne({where:{token}});

        FavGames.create({
            userCode: u.userCode,
            type,
            matchId: tid,
            info: data
        })
        
        return res.json({
            status: 1,
        });

        
    } catch (error) {
        console.log(error.stack);        

        return res.json({
            status: 0,
            msg: ERR_MSG.INTERNAL_ERROR,
        });
    }
};

exports.removeFavorite = async (req, res) => {
    try {
        const {type, tid} = req.body;
      
        FavGames.destroy({
            where:{
                type,
                matchId: tid
            }
        })
        
        return res.json({
            status: 1,
        });

        
    } catch (error) {
        console.log(error.stack);        

        return res.json({
            status: 0,
            msg: ERR_MSG.INTERNAL_ERROR,
        });
    }
};

exports.getGameLaunchUrl = async (req, res) => {
    try {
        const { agentCode, userCode, gameCode, balance, rtp, jackpotCome, isTest, lang, currency: agentCurrency, siteEndPoint } = req.body;
        //                  
        const agent = await Agent.findOne({ where: { code: agentCode } });
        if (!agent) {
            return res.json({
                status: 0,
                msg: "Invalid Agent",
            });
        }

        const user = await User.findOne({ where: { agentCode, userCode } });
       
        let currency = agentCurrency || "USD";
        //             
        let mgckey = md5(agentCode + userCode + gameCode + new Date());

        if (user) {
            await user.update({
                token: mgckey,                
                balance,
                lang,
                currency,
            });
        } else {
            const userData = {
                agentCode,
                userCode,
                token: mgckey,
                balance,
                totalDebit: 0,
                totalCredit: 0,
                lang,
                currency,
            };
            await User.create(userData);
        }

        let gameUrl = encodeURI(`${config.gameHost}/sports?mgckey=${mgckey}&lang=${lang}&from=${siteEndPoint}`);
        

        return res.json({
            status: 1,
            url: gameUrl,
        });
    } catch (error) {
        console.log(error);

        return res.json({
            status: 0,
            msg: SERVER_ERR_MSG.INTERNAL_ERROR,
        });
    }
};

exports.gameMaintenance = async (req, res) => {
    res.render(`503.ejs`);
};

exports.mainPage = async (req, res) => {    
    try {
        const { gameHost } = config;
        const { lang, mgckey: token, from } = req.query;
        req.token = token;

        let newToken = token;

        if ( !lang || !token) {

            return res.render("error/500", {
            });
        }

        const user = await User.findOne({ where: { token } });
        if (!user) {
            return res.render("error/500");
        }

        user.update({ lang: lang, token: newToken });

        return res.render("index", {
            token: newToken,
            lang: lang,
            currency: user.currency,
            from,
        });
    } catch (error) {
        logger("error", "Game | Run Game", error.message, req);

        return res.render("error/500");
    }

};

exports.placeSingleBet = async (req, res) => {
    try {
        const { data, token } = req.body;
        const bet_data = JSON.parse(data);

        if ( !data || !token) {
            return res.status(200).send({
                status:0,
            });
        }

        const user = await User.findOne({ where: { token } });
        if (!user) {
            return res.status(200).send({
                status:0,
            });
        }
        for(let i = 0; i < bet_data.length; i++) {
            const bid = bet_data[i].bid;
            const stake = bet_data[i].stake;
            const odd = bet_data[i].odd;

            const barr = bid.split("-");
            if(barr[0] == "idl") {
                //use live table
                const tableData = await Inplay.findOne({
                    include: [
                      {
                          model: InplayOdds,
                          attributes: ["data"],            
                      },
                    ],
                    where:{
                      id: barr[1]
                    },
                    raw:true
                });
                if(isEmpty(tableData)) {
                    return res.status(200).send({
                        status:0,
                    });
                }
                const o = analSoccerInplayResponse(JSON.parse(tableData["inplayodd.data"]));                
                for(let j = 0; j < o.odd.length; j++) {                   
                    for(let k = 0; k < o.odd[j].odds.length; k++) {
                        const odata = o.odd[j].odds[k];
                        if(odata.id == barr[2]) {
                            const org_odd = Number(odata.odds);
                            if(isNaN(org_odd) || Math.abs(org_odd - odd) > 0.05) {
                                return res.status(200).send({
                                    status:-1,  //odd mismatch error;
                                });
                            }
                            const winCondition = {
                                data: o.odd[j],
                                idx: barr[2],
                            }

                            const checkExist = await MyBet.findOne({where:{playerCode: user.userCode, event_id: barr[1], sport_id: tableData.sport_id, condition_idx: barr[2]}});
                            if(!isEmpty(checkExist)) {
                                return res.status(200).send({
                                    status:-2,  //Duplicated Request
                                });
                            }

                            await MyBet.create({
                                playerCode: user.userCode,
                                sport_id : tableData.sport_id,
                                event_id: barr[1],
                                condition_idx:barr[2],
                                bet: stake,
                                condition: JSON.stringify(winCondition),
                                win: org_odd * stake,
                                status: 0,  //Betted
                            })
                            break;
                        }
                    }                
                }               
                
            }
            else {
                //use prematch table
                const tableData = await Upcoming.findOne({
                    include: [
                      {
                          model: PrematchOdds,
                          attributes: ["data"],            
                      },
                    ],
                    where:{
                      id: barr[1]
                    },
                    raw:true
                });
                if(isEmpty(tableData)) {
                    return res.status(200).send({
                        status:0,
                    });
                }
                const o= JSON.parse(tableData['prematchOdd.data']);
                const bettings = ["main", "asian_lines", "goals", "half","minutes", "others", "specials"];
                let b = 0;
                for(let j = 0; j < bettings.length; j++) {
                    const item = bettings[j];
                    if(o[item] == undefined)
                        continue;
                    const odd_data = o[item].sp;
                    if(Array.isArray(o[item])) {
                        for(let j = 0; j < o[item].length; j++) {
                            const sp = o[item][j].sp;
                            const keys = Object.keys(sp);		
                            b= await func(keys, sp, barr[2], odd, stake, barr[1], user.userCode, tableData.sport_id);	
                            if(b == 1){
                                break;
                            }
                            if(b < 0) {
                                return res.status(200).send({
                                    status:b
                                });
                            }
                        }
                        if(b == 1){
                            break;
                        }
                    }
                    else {
                        const keys = Object.keys(odd_data);		
                        b= await func(keys, odd_data, barr[2], odd, stake, barr[1], user.userCode, tableData.sport_id);
                        if(b == 1) {
                            break;
                        }
                        if(b < 0) {
                            return res.status(200).send({
                                status:b
                            });
                        }
                    }				
                }
            }
        }

        

        return res.send({
            status: 1
        });
    } catch (error) {
        logger("error", "Game | Run Game", error.message, req);

        return res.render("error/500");
    }
};

const func = async (keys, odd_data, rid, odd, stake, evtId, userCode, sid) => {
    for(let j = 0; j < keys.length; j++) {
        const key = keys[j];
        const bet_name = odd_data[key].name;
        const odds = odd_data[key].odds;
        for(let k = 0; k < odds.length; k++) {
            const org_odd = (Number)(odds[k].odds);
            const id = odds[k].id;
            if(rid == id ) {
                if(isNaN(org_odd) || Math.abs(org_odd - odd) > 0.05) {
                    return -1;
                }

                const winCondition = {
                    data: odd_data[key],
                    idx: rid,
                }
    
                const checkExist = await MyBet.findOne({where:{playerCode: userCode, event_id: evtId, sport_id: sid, condition_idx: rid}});
                if(!isEmpty(checkExist)) {
                    return -2;
                }
    
                await MyBet.create({
                    playerCode: userCode,
                    sport_id : sid,
                    event_id: evtId,
                    condition_idx:rid,
                    bet: stake,
                    condition: JSON.stringify(winCondition),
                    win: org_odd * stake,
                    status: 0,  //Betted
                })
                return 1;
            }
            
        }
    }
    return 0;
}

const func1 = async (keys, odd_data, rid, odd, cons) => {
    for(let j = 0; j < keys.length; j++) {
        const key = keys[j];
        const bet_name = odd_data[key].name;
        const odds = odd_data[key].odds;
        for(let k = 0; k < odds.length; k++) {
            const org_odd = (Number)(odds[k].odds);
            const id = odds[k].id;
            if(rid == id ) {             
                cons.push(odd_data[key]);                 
                return org_odd;
            }
            
        }
    }
    return 1;
}

exports.placeMultipleBet = async (req, res) => {
    try {
        const { data, token } = req.body;
        const bet_data = JSON.parse(data);

        if ( !data || !token) {
            return res.status(200).send({
                status:0,
            });
        }

        const user = await User.findOne({ where: { token } });
        if (!user) {
            return res.status(200).send({
                status:0,
            });
        }

        const odd = (Number)(bet_data.odd);
        const stake = (Number)(bet_data.stake);
        const ids = bet_data.ids;
        const cons  = [];

        let oo = 1;
        for(let i = 0; i < ids.length; i++) {
            const bid = ids[i];
            const barr = bid.split("-");
            if(barr[0] == "idl") {
                //use live table
                const tableData = await Inplay.findOne({
                    include: [
                      {
                          model: InplayOdds,
                          attributes: ["data"],            
                      },
                    ],
                    where:{
                      id: barr[1]
                    },
                    raw:true
                });
                if(isEmpty(tableData)) {
                    return res.status(200).send({
                        status:0,
                    });
                }
                const o = analSoccerInplayResponse(JSON.parse(tableData["inplayodd.data"]));               
                for(let j = 0; j < o.odd.length; j++) {                   
                    for(let k = 0; k < o.odd[j].odds.length; k++) {
                        const odata = o.odd[j].odds[k];
                        if(odata.id == barr[2]) {
                            const org_odd = Number(odata.odds);                            
                            oo *= org_odd;
                            const d = {
                                data: o.odd[j],
                                idx : barr[2],
                            }
                            cons.push(d);
                        }
                    }
                }           
            }
            else {
                const tableData = await Upcoming.findOne({
                    include: [
                      {
                          model: PrematchOdds,
                          attributes: ["data"],            
                      },
                    ],
                    where:{
                      id: barr[1]
                    },
                    raw:true
                });
                if(isEmpty(tableData)) {
                    return res.status(200).send({
                        status:0,
                    });
                }
                const o= JSON.parse(tableData['prematchOdd.data']);
                const bettings = ["main", "asian_lines", "goals", "half","minutes", "others", "specials"];
                let b = 1;
                for(let j = 0; j < bettings.length; j++) {
                    const item = bettings[j];
                    if(o[item] == undefined)
                        continue;
                    const odd_data = o[item].sp;
                    if(Array.isArray(o[item])) {
                        for(let j = 0; j < o[item].length; j++) {
                            const sp = o[item][j].sp;
                            const keys = Object.keys(sp);		
                            b= await func1(keys, sp, barr[2], odd, cons);	
                            if(b != 1) {
                                break;
                            }                            
                        }
                    }
                    else {
                        const keys = Object.keys(odd_data);		
                        b= await func1(keys, odd_data, barr[2], odd, cons);                        
                    }
                    oo *= b;	
                    if(b != 1){
                        break;
                    }
                }
            }
        }

        if(Math.abs(oo - odd) > 0.2) {
            return res.status(200).send({
                status:-1,  //odd mismatch error;
            });
        }
  
        const checkExist = await MyBet.findOne({where:{playerCode: user.userCode, event_id:0, sport_id: 0, condition_idx: JSON.stringify(ids)}});
        if(!isEmpty(checkExist)) {
            return res.status(200).send({
                status:-2,  //Duplicated Request
            });
        }
        
        await MyBet.create({
            playerCode: user.userCode,
            sport_id : 0,
            event_id: 0,
            condition_idx:JSON.stringify(ids),
            bet: stake,
            condition: JSON.stringify(cons),
            win: oo * stake,
            status: 0,  //Betted
        })

        return res.send({
            status: 1
        });
    } catch (error) {
        logger("error", "Game | Run Game", error.message, req);

        return res.render("error/500");
    }
};