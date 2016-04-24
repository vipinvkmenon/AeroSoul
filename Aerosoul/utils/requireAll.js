

	var fs = require('fs');

	module.exports = function requireAll(options) {

		if (typeof options === 'string') {
			options = {
				dirname: options,
				filter: /(.+)\.js(on)?$/,
				excludeDirs: /^\.(git|svn)$/
			};
		}

		function identity(val) {
			return val;
		}

		var files = fs.readdirSync(options.dirname);
		var modules = {};
		var resolve = options.resolve || identity;

		function excludeDirectory(dirname) {
			return options.excludeDirs && dirname.match(options.excludeDirs);
		}

		files.forEach(function(file) {
			var filepath = options.dirname + '/' + file;
			if (fs.statSync(filepath).isDirectory()) {

				if (excludeDirectory(file) || (options.excludeFiles && options.excludeFiles.indexOf(file) !== -1)) return;

				modules[file] = requireAll({
					dirname: filepath,
					filter: options.filter,
					excludeDirs: options.excludeDirs,
					resolve: resolve
				});

			} else {
				var match = file.match(options.filter);
				if (!match) return;

				modules[match[1].replace(/\.js/, '')] = resolve(require(filepath));
			}
		});

		return modules;
	};