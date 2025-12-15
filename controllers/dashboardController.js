const { getAllMessages } = require("../db/queries-msgs");

exports.dashboardGet = async (req, res, next) => {
  try {
    const messages = await getAllMessages();
    res.render("dashboard", {
      messages,
      isMember: req.user.is_member,
    });
  } catch (error) {
    next(error);
  }
};
