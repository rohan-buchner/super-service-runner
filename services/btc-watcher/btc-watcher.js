const rp = require('request-promise');

// https://api.mybitx.com/api/1/ticker?pair=XBTZAR
function bitxTicker() {

	var options = {
	    uri: 'https://api.mybitx.com/api/1/ticker',
	    qs: {
	        pair: 'XBTZAR' // -> uri + '?access_token=xxxxx%20xxxxx' 
	    },
	    headers: {
	        'User-Agent': 'Request-Promise'
	    },
	    json: true // Automatically parses the JSON string in the response 
	};
 
	return rp(options);  
};

//https://www.cryptocompare.com/api/#-api-data-price-
function cryptocompare() {

	var options = {
	    uri: 'https://min-api.cryptocompare.com/data/pricemulti',
	    qs: {
	        fsyms: 'ETH,DASH,BTC,LTC,DOGE',
	        tsyms: 'USD'
	    },
	    headers: {
	        'User-Agent': 'Request-Promise'
	    },
	    json: true // Automatically parses the JSON string in the response 
	};
 
	return rp(options);  
};

module.exports = function (config) {

	bitxTicker()
    	.then(data => {
        	//slack.publish(data)
        	console.log(data)
      	});

	cryptocompare()
    	.then(data => {
        	//slack.publish(data)
        	console.log(data)
      	});
};