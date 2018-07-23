require('dotenv').config();
const server = require('./bin');

server.start().catch(err => {
  console.error(err);
  process.exit(1);
});
