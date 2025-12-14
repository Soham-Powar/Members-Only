const Router = require("express");
const dashboardRouter = new Router();

const dashboardController = require("../controllers/dashboardController");
const isAuth = require("../middlewares/isAuth");

dashboardRouter.get("/", isAuth, dashboardController.dashboardGet);

module.exports = dashboardRouter;
