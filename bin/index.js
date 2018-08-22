const Glue = require('glue');

const pkg = require('./../package.json');
const config = require('./config');

let finalServer = null;

async function start() {
  try {
    finalServer = await Glue.compose(
      config.manifestOptions,
      config.glueOptions
    );

    await finalServer.start();

    finalServer.plugins.utils.logger.info(
      `${pkg.name} running on ${finalServer.info.uri}`
    );

    finalServer.events.on('response', req => {
      finalServer.plugins.utils.logger.verbose(
        `${req.method.toUpperCase()} ${req.response.statusCode} -> ${
          req.path
        } ${JSON.stringify(req.query)}`
      );
    });

    return finalServer;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

function stop() {
  return finalServer.stop();
}

module.exports = {
  start,
  stop
};
