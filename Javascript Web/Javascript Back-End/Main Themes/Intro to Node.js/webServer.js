const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    });

    switch (req.url) {
        case "/":
            res.write('<h1>This is home page</h1>');
            break;

        case "/contact":
            res.write('<h1>Here u can contact us</h1>');
            break;

        case "/support":
            res.write('<h1>Here u can send a ticket about problem</h1>');
            break;

        case '/videos': 
        res.write('<h1>There are some videos</h1>')
        res.write('<ul></ul>')

        default: 
        res.write('<h1>Error 404<h1>');
        res.write('<h2>Try again later :(</h2>');
    }
    res.end();
});

server.listen(3000);

console.log('Server is running on port 3000...');