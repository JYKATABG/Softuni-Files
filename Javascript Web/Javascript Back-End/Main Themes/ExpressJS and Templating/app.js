const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(
        `<h1>Hello World</h1>
        <a href="/dog">dog</a>`);
});

app.get('/dog', (req, res) => {
    res.send('<h1>This is your dog</h1>');
});

app.put('/dog', (req, res) => {
    res.send('<h1>Dog updated<h1>');
});

app.delete('/dog', (req, res) => {
    res.send('Dog is deleted');
});



app.get('/dog/:dogId', (req,res,next) => {
    console.log('Middleware logger');
    next();
}, (req, res) => {
    console.log(req.params.dogId);
    res.send(`<h1>The dog id is - ${req.params.dogId}</h1>`);
})

app.listen(5000, () => console.log('Server is running on port 5000...'));