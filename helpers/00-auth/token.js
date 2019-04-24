const jwt = require('jsonwebtoken');

module.exports = {
    generateToken,
}

const secret =  process.env.JWT_SECRET || 'Secrets are best kept out loud'

function generateToken(user){

    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '1d',
    }

    return jwt.sign(payload, secret, options)
}