const http = require('http');

function requestHandler(req, res) {
    res.write('ok, this is a response from cloud run');
    res.end();
}

const server = http.createServer(requestHandler);
const port = process.env.PORT || 8888;
server.listen(port, () => console.log(`cloud run listening on port ${port}`));
