const content = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

module.exports = part1 = (inputs) => {
    for (let i = 0; i < inputs.length; i += 1) {
        for (let j = i + 1; j < inputs.length; j += 1) {
            if (+inputs[i] + +inputs[j] === 2020) {
                return inputs[i] * inputs[j];
                break;
            }
        }
    }
};

console.log(part1(content));
