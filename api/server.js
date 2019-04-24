const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const authRouter = require('../helpers/00-auth/auth-router')
const userRouter = require('../helpers/01-users/user-router')
const groupRouter = require('../helpers/02-groups/group-router')
const templateRouter = require('../helpers/03-templates/template-router')
const eventRouter = require('../helpers/04-events/event-router')

const { authenticate } = require('../helpers/00-auth/authMiddleware')

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/auth', authRouter)
server.use('/users', userRouter)
server.use('/groups', groupRouter)
server.use('/templates', templateRouter)
server.use('/events', eventRouter)

server.get('/', (req, res) => {
    res.send("Calendar server is up and running!")
});

module.exports = server;