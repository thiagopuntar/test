const { Router } = require("express");
const router = new Router();
const offers = require("../modules/offer/offer.route");

router.use("/offers", offers);

module.exports = router;
