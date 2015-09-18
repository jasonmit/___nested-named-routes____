var Router = require('named-routes');

module.exports = function(app) {
	var router = new Router();
	router.extendExpress(app);
	router.registerAppHelpers(app);

	router.add('get', '/foo', require('./foo'), { name: 'foo' });
	router.add('get', '/bar', require('./bar'), { name: 'bar' });

	return router;
}
