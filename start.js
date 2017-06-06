const autoLoader = require('auto-loader');
const readYaml = require('read-yaml');
const CronJob = require('cron').CronJob;

var services = autoLoader.load(__dirname +'/services')

readYaml('config.yml', function(err, conf) {

	if (err) throw err;
  	
 	Object.keys(conf).forEach(function (key) {

 		console.log('Creating CRON for ' + key);
 		
 		new CronJob(conf[key].cron,
 			// start hook
 			function(data) {
				console.log('start', data);
   				services[key](conf[key]);
			},
			// end hook 
			function(data) {
				console.log('done', data)
			}, 
			// start now
			true, 
			// timezone
			'America/Los_Angeles');  //TODO: get correct timesone
	});	
});