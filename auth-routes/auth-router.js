const router = require("express").Router();
const passport = require("passport");
const User = require('../helpers/01-users/user-model')
require('dotenv').config();


router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.FRONT_END_URL);
});

router.get("/google", passport.authenticate("google", {
    scope: ["profile"]
  })
);

router.get('/google/redirect', passport.authenticate('google'), async (req, res) =>{
  
  let token = req.user.token;
  let userId = req.user.id;
  
  count = await User.getUserGroups(userId)
  console.log(count.length)

  //different front end view renders based off of whether the User has Groups or not...
  if(count.length > 0){
    res.redirect(`${process.env.FRONT_END_URL}/home/${count[0].id}?token=${token}&userId=${userId}&group_id=${count[0].id}`)
  } else {
    res.redirect(`${process.env.FRONT_END_URL}?token=${token}&userId=${userId}`)
  }
})
//http://localhost:3000+
//https://calendr.netlify.com?token=${token}&userId=${userId}


module.exports = router;


