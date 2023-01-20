const fs = require('fs');

const readableStream = fs.createReadStream('./data.txt');

readableStream.on('data', (chunk) => {
    console.log('-------------New Chunk--------------------');
    console.log(chunk);
});

readableStream.on('close', () => {
    console.log('Stream end');
});