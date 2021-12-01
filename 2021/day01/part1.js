const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/)
    .map((x) => +x);

let count = 0;
for (let i = 0; i < inputs.length; i += 1) {
    const currentValue = inputs[i];
    const previousValue = inputs[i - 1];

    if (currentValue > previousValue) {
        count += 1;
    }
}

console.log(count);
