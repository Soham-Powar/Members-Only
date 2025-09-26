const Router = require("express");
const registerRouter = new Router();
const registerController = require("../controllers/registerController");

registerRouter.get("/", registerController.registerGet);
registerRouter.post("/", registerController.registerPost);

module.exports = registerRouter;
