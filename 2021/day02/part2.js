const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

let hposition = 0;
let depth = 0;
let aim = 0;
inputs.forEach((line) => {
    const [command, unit] = line.split(' ');
    if (command === 'forward') {
        hposition += +unit;
        depth += aim * +unit;
    }
    if (command === 'down') {
        aim += +unit;
    }
    if (command === 'up') {
        aim -= +unit;
    }
});

console.log(hposition * depth);
