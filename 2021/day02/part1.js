const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

let hposition = 0;
let depth = 0;
inputs.forEach((line) => {
    const [command, unit] = line.split(' ');
    if (command === 'forward') {
        hposition += +unit;
    }
    if (command === 'down') {
        depth += +unit;
    }
    if (command === 'up') {
        depth -= +unit;
    }
});

console.log(hposition * depth);
