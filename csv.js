const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
	res.setHeader("Content-Type", "text/csv");
	res.setHeader("Content-Disposition", "attachment;filename=whydocatspurr.csv");
	res.writeHead(200); res.end(`id, reason, author\n1, Because them like you, Holren`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});