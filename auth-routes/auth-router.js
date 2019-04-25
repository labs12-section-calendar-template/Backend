const router = require('express').Router();
const passport = require('passport')

router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', (req, res) =>{
    console.log(req.query)
    res.send('you reached the callback api')
})

module.exports = router;