const autoLoader = require('auto-loader');
const readYaml = require('read-yaml');
const cron = require('node-cron');

const services = autoLoader.load(__dirname +'/services')

readYaml('config.yml', function(err, conf) {

	if (err) throw err;
  	
 	Object.keys(conf).forEach(function (key) {

 		// if the service is disabled in the config, dont schedule it
		if(!conf[key].enabled) { return; }

		if(cron.validate(conf[key].cron)) {
 			console.log('Creating CRON for ' + key);		

	 		cron.schedule(conf[key].cron, function(){
	   			services[key](conf[key]);
			});
		} else {
			console.log('CRON invalid for::' + key)
		}	
	});	
});