const fs = require('fs');

fs.writeFile('./output.txt', 'Burkam si v guza!', () => {
    console.log('File has been created');
});