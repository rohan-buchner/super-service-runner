const autoLoader = require('auto-loader');
const readYaml = require('read-yaml');
const cron = require('node-cron');

const services = autoLoader.load(__dirname +'/services')

readYaml('config.yml', function(err, conf) {

	if (err) throw err;
  	
 	Object.keys(conf).forEach(function (key) {

 		console.log('Creating CRON for ' + key);

		if(cron.validate(conf[key].cron)) {				

			console.log(conf[key].cron, '-> is valid cron');

	 		var task = cron.schedule(conf[key].cron, function(){
	   			services[key](conf[key]);
			});

		} else {
			console.log('Cron invalid for::' + key)
		}

	});	
});