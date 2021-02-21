const { Router } = require("express");
const router = new Router();
const controller = require("./offer.controller");

router.get("/", controller.listEnabled);
router.get("/all", controller.listAll);
router.get("/:id", controller.getById);
router.post("/", controller.save);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.post("/changeStatus/:id", controller.changeStatus);

module.exports = router;
