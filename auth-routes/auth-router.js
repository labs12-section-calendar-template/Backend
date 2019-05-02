const router = require("express").Router();
const passport = require("passport");
require('dotenv').config();


router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/google", passport.authenticate("google", {
    scope: ["profile"]
  })
);

router.get('/google/redirect', passport.authenticate('google'), (req, res) =>{
  res.redirect("https://google.com/")
})


module.exports = router;
