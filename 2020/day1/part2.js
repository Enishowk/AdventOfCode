const content = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8');

const inputs = content.split(/\r?\n/);

for (let i = 0; i < inputs.length; i += 1) {
    for (let j = i + 1; j < inputs.length; j += 1) {
        for (let k = j + 1; k < inputs.length; k += 1) {
            if (+inputs[i] + +inputs[j] + +inputs[k] === 2020) {
                console.log(inputs[i] * inputs[j] * inputs[k]);
            }
        }
    }
}
