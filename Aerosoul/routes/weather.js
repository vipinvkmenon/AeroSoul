var request = require('request');
var https = require('https');
var weather ={

	/*getCurrentWeatherDetials: function (request,response) {
		console.log("Hello");
			var yahooHost = 'https://query.yahooapis.com/v1/public/yql?q=';
			var query = 'select units,location,atmosphere,item.condition from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text=\"(11.9715990,77.5945630)\")'
			var full = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(11.9715990%2C77.5945630)%22)&format=json&diagnostics=true&callback='
			
			https.get(full,function (responseback) {
				var dat = '';
				responseback.on('data', function(data) {
					dat = dat+data;
           
        });
				responseback.on('end', function(data) {
					
            console.log( JSON.parse(data) );
        });
				
				
			});
			response.status(200).send('body');

		
	}*/

}

module.exports = weather;