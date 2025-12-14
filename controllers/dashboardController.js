const db = require("../db/queries");

exports.dashboardGet = async (req, res, next) => {
  res.render("dashboard");
};
