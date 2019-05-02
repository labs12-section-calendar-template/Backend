const router = require("express").Router();
const passport = require("passport");
const key = require("../config/keys");
require('dotenv').config();
const localhost_url = 'http://localhost:3000'

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
    if(process.env.NODE_ENV === 'production'){
      res.redirect('https://calendr.netlify.com')
    } else {
      res.redirect(`${localhost_url}`)
    }
})


module.exports = router;
