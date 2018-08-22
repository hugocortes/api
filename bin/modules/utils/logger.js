const winston = require('winston');

const options = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    db: 5,
    test: 6
  },
  colors: {
    test: 'bold red cyanBG',
    db: 'bold white'
  },
  console: {
    timestamp: () => new Date().toLocaleTimeString(),
    colorize: true,
    level: process.env.LOG_LEVEL || 'error',
    stderrLevels: ['error']
  }
};

winston.addColors(options.colors);

const logger = new winston.Logger({
  levels: options.levels,
  transports: [new winston.transports.Console(options.console)]
});

module.exports = logger;
