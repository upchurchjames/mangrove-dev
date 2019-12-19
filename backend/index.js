const http = require('http');
const express = require('express');

const app = express();
const router = express.Router();

const server = http.createServer(app);

const port = 3001;


router.get('/hello', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    var data = {message: 'hello'};
    console.log(data);

    res.send(data);
});
app.use('/', router);

console.log(`Starting server on port ${port}...`)
server.listen(port);

