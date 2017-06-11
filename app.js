require('dotenv').config();

const server = require('./bin');

server.start().catch();
