const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        console.log(req.user)
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.send('This profile belongs to ' + req.user.displayName);
});

module.exports = router;