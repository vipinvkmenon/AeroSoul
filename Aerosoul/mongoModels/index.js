var requireAll = require('../utils/requireAll.js');

module.exports = requireAll({
	dirname: __dirname,
	filter	: /^(?!index\.js)(.+)/,
	resolve	: function (controller) {
		return controller;
	}
});