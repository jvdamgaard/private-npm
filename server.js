var fs = require('fs');
var sinopia = require('sinopia');
var yaml = require('sinopia/node_modules/js-yaml')
var logger = require('sinopia/lib//logger')

logger.setup()
var config = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf8'))

var server = sinopia(config);

var port = process.env.port || 4873;
server.listen(process.env.port || 4873);

console.log('Sinopia server listening on', port);
