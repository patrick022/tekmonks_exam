const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
	let service = require('../api/api.js');
	const reqUrl = url.parse(req.url, true);

	// getTimeStories Endpoint
	if (reqUrl.pathname == '/getTimeStories' && req.method === 'GET') {
		console.log('Request Type:' + req.method + ' Endpoint: ' + reqUrl.pathname);

		service.getRequest(req, res);
	}
});
