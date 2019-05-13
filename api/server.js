const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('../config/keys')
const server = express();

// const authRouter = require('../helpers/00-auth/auth-router') <----- old auth linked here
const authRouter = require('../auth-routes/auth-router');
const profileRouter = require('../auth-routes/authCheck')
const userRouter = require('../helpers/01-users/user-router');
const groupRouter = require('../helpers/02-groups/group-router');
const memberRouter = require('../helpers/03-members/members-router');

const templateRouter = require('../helpers/04-templates/template-router');
const eventRouter = require('../helpers/05-events/event-router');

const passportSetup = require("../config/passport-setup");

// const { authenticate } = require('../helpers/00-auth/authMiddleware') <--- old auth middleware

server.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}));


const corsOptions = {
    credentials: true,
    origin: [process.env.FRONT_END_URL]
  };

  server.use(cors(corsOptions));

server.use(passport.initialize());
server.use(passport.session());

server.use(express.json());
server.use(helmet());
server.use('/auth', authRouter);
server.use('/users', userRouter);
server.use('/groups', groupRouter);
server.use('/members', memberRouter);
server.use('/templates', templateRouter);
server.use('/events', eventRouter);
server.use('/profile', profileRouter)

server.get('/', (req, res) => {
    res.send("Calendar server is up and running!")
});

module.exports = server;
