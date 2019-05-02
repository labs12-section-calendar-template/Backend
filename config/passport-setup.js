const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');
const keys = require('./keys'); 
const User = require('../helpers/01-users/user-model')

passport.serializeUser(function(user, done) {
    // done(null, user.id);
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    // Users.findById(obj, done);
    done(null, obj);
  });
  

passport.use(new GoogleStrategy({
    //takes in options for the google strat
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret

}, function(accessToken, refreshToken, profile, done) {
    // Query the database to find user record associated with this
    // google profile, then pass that object to done callback
    User.findByGoogleId(profile.id).then(function(id) {
      if (id) {
        console.log('The Current User IS')
        return done(null, profile);
      } else {
        //if user doesnt exist create new one
        User.add({
            username: profile.displayName,
            googleId: profile.id,
        }).then((newUser => {
            console.log('The created user is')
            return done(null, profile)
        }))
    }
    });
  })
);

