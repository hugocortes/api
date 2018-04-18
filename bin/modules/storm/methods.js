
function getStorm() {
  return new Promise(resolve => resolve({ ping: 'pong' }));
}

function initialize(server) {
  server.method('storm.get', getStorm, { bind: server });
}

exports.initialize = initialize;
