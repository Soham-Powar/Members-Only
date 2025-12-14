const express = require("express");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

require("./config/passport");
const session = require("express-session");
const passport = require("passport");

app.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.session());

const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
const dashboardRouter = require("./routes/dashboardRouter");

app.use((req, res, next) => {
  res.locals.currentUser = req.user || null;
  console.log(res.locals.currentUser);
  next();
});

app.use("/dashboard", dashboardRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
  res.render("index", { user: req.user || null });
});

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("fdee");
});
