const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {
        'Contet-Type':'text/html'
    });

    res.write('Hello Siri');
    res.write('Maika miri li kakva beshe');
    res.end();
});

server.listen(5000);

console.log('Server is running on port 5000...');