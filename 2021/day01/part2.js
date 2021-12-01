const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/)
    .map((x) => +x);

let count = 0;
for (let i = 0; i < inputs.length; i += 1) {
    const [firstValue, secondValue, thirdValue, fourthValue] = inputs.slice(
        i,
        i + 4
    );
    const firstSliding = firstValue + secondValue + thirdValue;
    const secondSliding = secondValue + thirdValue + fourthValue;

    if (secondSliding > firstSliding) {
        count += 1;
    }
}

console.log(count);
