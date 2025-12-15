function isMember(req, res, next) {
  if (req.user && req.user.is_member) {
    return next();
  }
  res.redirect("/dashboard"); // or 403 page
}

module.exports = isMember;
