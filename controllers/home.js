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
        const {type, tid, token, data} = req.body;
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
                if(barr[2] == 'h' || barr[2] == 'g' || barr[2] == 'f') {
                    const nameObj = {h:'Asian Handicap', g:'Match Goals', f:'Fulltime Result'};
                    const betName = nameObj[barr[2]];
                    for(let j = 0; j < o.odd.length; j++) {
                        if(o.odd[j].name.search(betName) != -1) {
                            const ln = o.odd[j].odds.length;
                            const idxes = (ln == 3)? {'1': 0, 'x': 1, '2': 1} : {'1':0, '2':1};
                            const idx = idxes[barr[3]];
                            const org_odd = Number(o.odd[j].odds[idx].odds);
                            if(isNaN(org_odd) || Math.abs(org_odd - odd) > 0.05) {
                                return res.status(200).send({
                                    status:-1,  //odd mismatch error;
                                });
                            }
                            const winCondition = {
                                data: o.odd[j],
                                idx,
                            }
                            const checkExist = await MyBet.findOne({where:{playerCode: user.userCode, event_id: barr[1], sport_id: tableData.sport_id, condition_idx: `${j},${idx}`}});
                            if(!isEmpty(checkExist)) {
                                return res.status(200).send({
                                    status:-2,  //Duplicated Request
                                });
                            }

                            await MyBet.create({
                                playerCode: user.userCode,
                                sport_id : tableData.sport_id,
                                event_id: barr[1],
                                condition_idx:`${j},${idx}`,
                                bet: stake,
                                condition: JSON.stringify(winCondition),
                                win: org_odd * stake,
                                status: 0,  //Betted
                            })
                            break;
                        }   
                    }
                }
                else {
                    const org_odd = o.odd[barr[2]]?.odds[barr[3]]?.odds;
                    if(isNaN(org_odd) || Math.abs(org_odd - odd) > 0.05) {
                        return res.status(200).send({
                            status:-1,  //odd mismatch error;
                        });
                    }
                    const checkExist = await MyBet.findOne({where:{playerCode: user.userCode, event_id: barr[1], sport_id: tableData.sport_id, condition_idx: `${barr[2]},${barr[3]}`}});
                        if(!isEmpty(checkExist)) {
                            return res.status(200).send({
                                status:-2,  //Duplicated Request
                            });
                        }
                        
                    const winCondition = {
                        data: o.odd[barr[2]],
                        idx : barr[3],
                    }
                    await MyBet.create({
                        playerCode: user.userCode,
                        sport_id : tableData.sport_id,
                        event_id: barr[1],
                        condition_idx:`${barr[2]},${barr[3]}`,
                        bet: stake,
                        condition: JSON.stringify(winCondition),
                        win: org_odd * stake,
                        status: 0,  //Betted
                    })
                }
                
            }
            else {
                //use prematch table
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
                if(barr[2] == 'h' || barr[2] == 'g' || barr[2] == 'f') {
                    const nameObj = {h:'Asian Handicap', g:'Match Goals', f:'Fulltime Result'};
                    const betName = nameObj[barr[2]];
                    for(let j = 0; j < o.odd.length; j++) {
                        if(o.odd[j].name.search(betName) != -1) {
                            const ln = o.odd[j].odds.length;
                            const idxes = (ln == 3)? {'1': 0, 'x': 1, '2': 1} : {'1':0, '2':1};
                            const idx = idxes[barr[3]];
                            const org_odd = Number(o.odd[j].odds[idx].odds);
                            if(isNaN(org_odd)) {
                                return res.status(200).send({
                                    status:-1,  //odd mismatch error;
                                });
                            }
                            oo *= org_odd;
                            const d = {
                                data: o.odd[j],
                                idx,
                            }
                            cons.push(d);
                            break;
                        }   
                    }
                }
                else {
                    const org_odd = o.odd[barr[2]]?.odds[barr[3]]?.odds;
                    if(isNaN(org_odd)) {
                        return res.status(200).send({
                            status:-1,  //odd mismatch error;
                        });
                    }
                    const d = {
                        data: o.odd[barr[2]],
                        idx : barr[3],
                    }
                    cons.push(d);
                    oo *= org_odd;
                }
                
            }
            else {
                //use prematch table
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