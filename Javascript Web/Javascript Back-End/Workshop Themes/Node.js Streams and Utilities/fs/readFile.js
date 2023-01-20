const fs = require('fs');

const text = fs.readFileSync('./data.txt', { encoding: 'utf-8' });

console.log(text);