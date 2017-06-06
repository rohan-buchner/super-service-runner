const rp = require('request-promise');

// https://api.mybitx.com/api/1/ticker?pair=XBTZAR
function getPairRate(pair) {

	var options = {
	    uri: 'https://api.mybitx.com/api/1/ticker',
	    qs: {
	        pair: pair // -> uri + '?access_token=xxxxx%20xxxxx' 
	    },
	    headers: {
	        'User-Agent': 'Request-Promise'
	    },
	    json: true // Automatically parses the JSON string in the response 
	};
 
	return rp(options);  
};

module.exports = function(config) {
   getPairRate(config.rate)
      .then(data => {
         //slack.publish(data)
         console.log(data)
      })
 };