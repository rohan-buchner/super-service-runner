const rp = require('request-promise');

function get(uri) {

  var options = {
      uri: uri,
      headers: {
          'User-Agent': 'Request-Promise'
      },
      json: true
  };
 
  return rp(options);  
};

module.exports = function (config) {

  config.endpoints.forEach(function(endpoint) {

      get(endpoint.uri)
        .then(data => {
            var map = require('./maps/' + endpoint.map)

            var output = Object.assign({}, endpoint, map(data));
            //slack.publish(data)
            console.log(output);
          });
  })
};