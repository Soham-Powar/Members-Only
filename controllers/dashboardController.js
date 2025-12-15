const { getAllMessages, addMessage } = require("../db/queries-msgs");
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
  if (req.body.secret === process.env.INSIDER_CODE) {
    await updateMembership(req.user.userid);
    return res.redirect("/dashboard");
  }

  res.render("becomeInsider", {
    error: "Invalid secret code.",
  });
};

exports.addMessageGet = (req, res) => {
  res.render("addMessage");
};

exports.addMessagePost = async (req, res, next) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.render("addMessage", {
      error: "Title and body are required.",
    });
  }

  try {
    await addMessage({
      userid: req.user.userid,
      title,
      body,
    });
    res.redirect("/dashboard");
  } catch (error) {
    next(error);
  }
};
