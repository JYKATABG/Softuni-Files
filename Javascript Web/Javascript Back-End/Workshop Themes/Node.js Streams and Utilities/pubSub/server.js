const http = require('http');
const { report } = require('process');

const eventBus = require('./eventSub.js')

const server = http.createServer((req,res) => {
    res.write('Working');

    eventBus.publish('request', {method: req.method, url : req.url});
    res.end();
});

server.listen(5000);

console.log('Server is running on port 5000...');