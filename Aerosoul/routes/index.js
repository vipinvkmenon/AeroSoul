var requireAll = require('../utils/requireAll');

/* GET home page. */



module.exports = function (app) {
	var routes = requireAll({
			dirname	: __dirname,
			filter	: /^(?!index\.js)(.+)/,
			resolve	: function (route) {
				return route;
			}
		});


		app.options('/*', function(req, res, next) {
			
			if ( req.method.toLowerCase() !== 'options' ) {
				return next();
			}
			return res.status(204).end();
		});


		app.get('/', function(req, res) {
			res.send('Welcome');
		});


app.get('/weather',routes.weather.getCurrentWeatherDetials);
};
