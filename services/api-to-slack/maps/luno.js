module.exports = function map(data) {
	return {
		icon_emoji: ":v:",
	  	text: ":aw_yeah: LUNO BTC \nPrice: R"+ data.ask + "\n Last trade: R" + data.last_trade + "\n Rolling 24 Hour Volume: " + data.rolling_24_hour_volume
	}
}