const jwt = require('jsonwebtoken')
const secret = require('./secret').jwtSecret;


module.exports = {
    authCheck
}

function authCheck(req, res, next) {
    const token = req.get('Authorization');
  
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(401).json(err);
        req.decoded = decoded;
        next();
      });
    } else {
      res.status(401).json({
        error: 'No token provided, must be set on the Authorization Header',
      });
      res.redirect(`${process.env.FRONT_END_URL}/logout`)
    }
  }