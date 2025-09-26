const db = require("../db/queries");

exports.registerGet = (req, res) => {
  const error = req.query.error || null;
  res.render("register", { error });
};

exports.registerPost = async (req, res, next) => {
  try {
    const { firstName, lastName, userName, password, confirmPassword } =
      req.body;

    if (password !== confirmPassword) {
      return res.redirect("/register?error=Passwords+do+not+match");
    }

    await db.addUser({ firstName, lastName, userName, password });

    res.redirect("/login");
  } catch (err) {
    next(err);
  }
};
