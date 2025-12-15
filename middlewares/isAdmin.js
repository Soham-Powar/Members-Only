function isAdmin(req, res, next) {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.redirect("/");
    //or
    // res.status(403).send('You do not have permission to view this page as u no admin');
  }
}
