const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, "homework.txt");

fs.writeFile('homework.txt', 'Homework 02 in Basic Node', (err) => {
    if (err) throw err;
    // console.log('The file was created');
});

fs.appendFile(filePath, '\nFINISHED!', (err) => {
    if (err) throw err;
    // console.log('finished');
});