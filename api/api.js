const url = require('url');
const { data } = require('../utils/data.js');

exports.getRequest = function (req, res) {
	const reqUrl = url.parse(req.url, true);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(data));
};
