const autoLoader = require('auto-loader');
const read = require('read-yaml');
const CronJob = require('cron').CronJob;

const services = autoLoader.load(__dirname +'/services')

var config = read.sync('config.yml');

read('services/services.config.yml', function(err, conf) {

	if (err) throw err;
  	
 	Object.keys(conf).forEach(function (key) {

 		// if the service is disabled in the config, dont schedule it
		if(!conf[key].enabled) { return; }

		try {

 			console.log('Creating CRON for:: ' + key);	

			new CronJob({
				cronTime: conf[key].cron,
				onTick: function() {
					console.log(key + ' started');
					console.log('');
					if (typeof services[key] === "function") {
						// top level entry
						services[key](conf[key]);
					} else {
						// 2nd level entry. eg. in a folder
						services[key][key](conf[key]);
					}
			  	},
			  	onComplete: function() {
			  		console.log('onComplete:: ' + key);	
			  	},
			  	start: true,
				timeZone: config.timeZone
			});

		} catch(ex) {
			console.log('CRON failed for:: ' + key, ex);
		}	
	});	
});