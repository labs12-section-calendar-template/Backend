const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user.token){
        console.log('tehee')
        res.redirect('/auth/login');
    } else {
         res.send(req.user.token)
        next();
     }
};

router.get('/', authCheck, (req, res) => {
    res.status(200).json({ message: req.user.token})
});

module.exports = router;