require('coffee-script')

// Setup default env variables
conf = require('nconf')
conf.argv().file({ file: __dirname + "/config.json" }).env()


if (conf.get('NODE_ENV') === 'production' || conf.get('NODE_ENV') === 'debug') {
    require('./_src/server').listen(process.env.PORT || conf.get('PORT'));
} else {
    require('derby').run(__dirname + '/_src/server', process.env.PORT || conf.get('PORT'));
}