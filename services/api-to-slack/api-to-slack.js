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

function defaultMap(data) {
  return {
    text: data
  }
}

module.exports = function (config) {

  config.endpoints.forEach(function(endpoint) {

      get(endpoint.uri)
        .then(data => {
            var output;

            if (endpoint.map !== undefined) {
              var map = require('./maps/' + endpoint.map)
              output = Object.assign({}, endpoint, map(data));
            } else {
              console.log('using default map');
              output = Object.assign({}, endpoint, defaultMap(data));
            }

            //slack.publish(data)
            console.log(output);
            console.log('-----');
            console.log('');
          });
  })
};