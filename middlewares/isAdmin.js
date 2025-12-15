function isAdmin(req, res, next) {
  if (req.user && req.user.is_admin) {
    next();
  } else {
    res
      .status(403)
      .send("You do not have permission to view this page as u no admin");
  }
}

module.exports = isAdmin;
