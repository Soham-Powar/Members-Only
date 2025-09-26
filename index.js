const express = require("express");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const registerRouter = require("./routes/registerRouter");

app.use("/register", registerRouter);

app.get("/", (req, res) => {
  res.render("index", { user: null }); // Pass user if logged in
});

app.listen(3000, () => {
  console.log("fdee");
});
