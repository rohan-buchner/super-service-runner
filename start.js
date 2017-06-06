const autoLoader = require('auto-loader');
const readYaml = require('read-yaml');

var services = autoLoader.load(__dirname +'/services')

readYaml('config.yml', function(err, conf) {

	if (err) throw err;
  	
 	Object.keys(conf).forEach(function (key) {
   		services[key](conf[key])
	});	
});