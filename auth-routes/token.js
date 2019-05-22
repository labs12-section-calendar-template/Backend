const secret = require('./secret').jwtSecret;
const jwt = require('jsonwebtoken');

module.exports = {
    generateToken,
}


function generateToken(user){
  
    const payload = {
      subject: user.id,
      username: user.username,
    }
  
    const options = {
      expiresIn: '1d',
    }
  
    return jwt.sign(payload, secret, options)
  }