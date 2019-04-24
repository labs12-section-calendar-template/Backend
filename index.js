require('dotenv').config()

const server = require('./api/server');

const port = process.env.PORT || 3300

server.listen(port, ()=> {
    console.log(`\n=== I AM LISTENING on ${port} ===\n`)
});