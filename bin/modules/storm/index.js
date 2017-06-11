const routes = require('./routes');
const methods = require('./methods');

exports.register = (server, options, next) => {
    routes.initialize(server);
    methods.initialize(server);
    next();
    
}

exports.register.attributes = {
    name: 'storm',
    version: '1.0.0'
}
