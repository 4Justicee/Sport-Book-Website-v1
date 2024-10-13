const { Contact, Agent, User, FavGames } = require("../models");
const axios = require("axios");
const md5 = require('md5');

const config = require("../config/main")

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