const Router = require("express");
const dashboardRouter = new Router();

const dashboardController = require("../controllers/dashboardController");
const isAuth = require("../middlewares/isAuth");

dashboardRouter.get("/", isAuth, dashboardController.dashboardGet);

dashboardRouter.get(
  "/become-insider",
  isAuth,
  dashboardController.becomeInsiderGet
);
dashboardRouter.post(
  "/become-insider",
  isAuth,
  dashboardController.becomeInsiderPost
);

dashboardRouter.get("/add-message", isAuth, dashboardController.addMessageGet);
dashboardRouter.post(
  "/add-message",
  isAuth,
  dashboardController.addMessagePost
);

module.exports = dashboardRouter;
