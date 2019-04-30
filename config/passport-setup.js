const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');
const keys = require('./keys');

passport.use(new GoogleStrategy({
    //takes in options for the google strat
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret

}, ()=>{
    //this will be a callback function that fires
})
)