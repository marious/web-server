const middleware = {
	requireAuthentication(req, res, next) {
		console.log("prive route hit!");
		next();
	},

	logger(req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl );
		next();
	}
};

console.log('hello');

module.exports = middleware;