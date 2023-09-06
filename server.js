const hostname = 'localhost';
const port = 3000;

const appServer = require('./controller/controller.js');

appServer.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
