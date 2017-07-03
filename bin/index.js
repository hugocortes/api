const Promise = require('bluebird');
const Glue = require('glue');

let plugins = [
    {
        plugin: {
            register: './storm'
        }
    }
];

const manifestOptions = {
    connections: [
        {
            port: process.env.PORT,
            host: process.env.HOST,
            routes: {
                cors: {
                    origin: ['*'],
                    additionalHeaders: ['x-requested-with', 'x-api-version', 'Access-Control-Allow-Headers']
                }
            }
        }
    ],
    registrations: plugins,
}

const glueOptions = {
    relativeTo: `${__dirname}/modules`
}

let finalServer = null;

function start() {
    return Glue.compose(manifestOptions, glueOptions)
        .then((server) => {
            finalServer = server;
            finalServer.route({
                method: 'GET',
                path: '/status',
                handler: (request, reply) => {
                    reply({success: true});
                }
            });
            return finalServer.start();
        })
        .then(() => Promise.resolve(finalServer))
        .catch((error) => {
            console.log(error);
        })
}

function stop() {
    return finalServer.stop();
}

module.exports = {
    start,
    stop
}
