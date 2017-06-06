var services = require('auto-loader').load(__dirname +'/services')

console.log(services['dota2']);

readYaml('config.yml', function(err, data) {
  if (err) throw err;
  console.log(data);
});