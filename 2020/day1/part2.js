const content = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

module.exports = part2 = (inputs) => {
    for (let i = 0; i < inputs.length; i += 1) {
        for (let j = i + 1; j < inputs.length; j += 1) {
            for (let k = j + 1; k < inputs.length; k += 1) {
                if (+inputs[i] + +inputs[j] + +inputs[k] === 2020) {
                    return inputs[i] * inputs[j] * inputs[k];
                }
            }
        }
    }
};

console.log(part2(content));
