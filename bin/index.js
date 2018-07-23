const Glue = require('glue');

let plugins = [
  {
    plugin: './storm',
    options: {}
  },
  {
    plugin: './utils',
    options: {}
  }
];

const manifestOptions = {
  server: {
    port: process.env.PORT,
    host: process.env.HOST
  },
  register: {
    plugins
  }
};

const glueOptions = {
  relativeTo: `${__dirname}/modules`
};

let finalServer = null;

const start = async function() {
  try {
    finalServer = await Glue.compose(
      manifestOptions,
      glueOptions
    );

    finalServer.route({
      method: 'GET',
      path: '/status',
      handler: (request, h) => h.response()
    });

    finalServer.route({
      method: 'GET',
      path: '/env',
      handler: () => {
        const response = {
          LOG_LEVEL: process.env.LOG_LEVEL,
          PORT: process.env.PORT,
          HOST: process.env.HOST,
          SECRET: process.env.SECRET,
          NODE_ENV: process.env.NODE_ENV
        };

        return response;
      }
    });

    if (
      ['info', 'verbose', 'debug', 'db'].indexOf(process.env.LOG_LEVEL > -1)
    ) {
      finalServer.events.on('response', req => {
        finalServer.plugins.utils.logger.info(
          `${req.method.toUpperCase()} ${req.response.statusCode} -> ${
            req.path
          } ${JSON.stringify(req.query)}`
        );
      });
    }

    await finalServer.start();
    finalServer.plugins.utils.logger.info(
      `service running on ${finalServer.info.uri}`
    );
    finalServer.plugins.utils.logger.verbose(
      `kubernetes secret: ${process.env.SECRET}`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const stop = async function() {
  return await finalServer.stop();
};

module.exports = {
  start,
  stop
};
