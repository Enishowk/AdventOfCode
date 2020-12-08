const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

let x = 0;

let accumulator = 0;
const actions = [];

while (true) {
    if (actions.includes(x)) {
        break;
    }
    const line = inputs[x];
    const [instruction, number] = line.split(' ');

    actions.push(x);
    if (instruction === 'acc') {
        accumulator += +number;
        x += 1;
    }
    if (instruction === 'nop') {
        x += 1;
    }
    if (instruction === 'jmp') {
        x += +number;
    }
}
console.log(accumulator);
