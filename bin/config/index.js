const plugins = [
  {
    plugin: './utils',
    options: {}
  },
  {
    plugin: './data',
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
  relativeTo: `${__dirname}/../modules`
};

module.exports = {
  manifestOptions,
  glueOptions
};
