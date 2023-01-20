// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send(`
//     <h1>Hello From ExpressJS</h1>
//     <a href="/dogs">dogs</a>
//     `);
    
// })

// app.get('/dogs', (req,res) => {
//     res.send('<h1>Hello there are some dogs</h1>')
// });

// app.get('/dogs/:dogId', (req,res) => {
//     console.log(req.params);
//     res.send(`<h1>Private Page: ID - ${req.params.dogId}</h1>`)
// });

// app.post('/cats', (req,res) => {
//     res.send('Cat Recived');
// });

// app.put('/cats', (req,res) => {
//     res.send('Cat Updated');
// });

// app.delete('/cats', (req,res) => {
//     res.send('Cat Deleted');
// });

// app.listen(5000, () => console.log('Server is listening on port 5000...'));