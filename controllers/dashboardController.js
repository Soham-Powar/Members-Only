const { getAllMessages } = require("../db/queries-msgs");
const { updateMembership } = require("../db/queries");

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

exports.becomeInsiderGet = (req, res) => {
  res.render("becomeInsider");
};

exports.becomeInsiderPost = async (req, res, next) => {
  const { secret } = req.body;
  const INSIDER_CODE = "yuhu1316";

  if (secret === INSIDER_CODE) {
    req.user.is_member = true;
    await updateMembership(req.user.userid);
    return res.redirect("/dashboard");
  }

  res.render("becomeInsider", {
    error: "Invalid secret code.",
  });
};
