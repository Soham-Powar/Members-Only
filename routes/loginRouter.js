const Router = require("express");
const loginRouter = new Router();
const passport = require("passport");

const loginController = require("../controllers/loginController");

loginRouter.get("/", loginController.loginGet);

loginRouter.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login?error=Invalid credentials",
  })
);

module.exports = loginRouter;
