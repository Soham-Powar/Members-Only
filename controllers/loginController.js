const db = require("../db/queries");

exports.loginGet = (req, res) => {
  const error = req.query.error || null;
  res.render("login", { error });
};
