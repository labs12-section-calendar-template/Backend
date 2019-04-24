const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const userRouter = require('../helpers/01-users/user-router')
const groupRouter = require('../helpers/02-groups/group-router')
const templateRouter = require('../helpers/03-templates/template-router')
const eventRouter = require('../helpers/04-events/event-router')

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/users', userRouter)
server.use('/groups', groupRouter)
server.use('/templates', templateRouter)
server.use('/events', eventRouter)

server.get('/', (req, res) => {
    res.send("Calendar server is up and running!")
});

module.exports = server;