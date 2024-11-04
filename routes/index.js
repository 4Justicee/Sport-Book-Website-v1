const express = require("express");

const config = require("../config/main");
const router = express.Router();
const homeController = require("../controllers/home")
// routers

router.get("/", (req, res) => {  
  return res.render("error/404");
});

router.post("/api/contact", homeController.saveContact);
router.post("/api/demo", homeController.playDemo);
router.post("/api/register_fav", homeController.registerFavorite);
router.post("/api/remove_fav", homeController.removeFavorite);
router.post("/api/gameurl", homeController.getGameLaunchUrl);
router.post("/api/place_single_bet", homeController.placeSingleBet);
router.post("/api/place_multiple_bet", homeController.placeMultipleBet);
router.get("/sports", homeController.mainPage);
router.get("/503", homeController.gameMaintenance);

module.exports = router;


