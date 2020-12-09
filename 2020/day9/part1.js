const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/)
    .map(x => +x);

const preambule = 25;
for (let i = preambule; i < inputs.length; i += 1) {
    const currentNumber = inputs[i];
    const previousNumber = inputs.slice(i - preambule, i);

    let findResponse = false;
    for (let j = 0; j < previousNumber.length; j += 1) {
        const element = previousNumber[j];
        const previousNumberWithoutElement = previousNumber.slice(j);
        if (previousNumberWithoutElement.includes(currentNumber - element)) {
            findResponse = true;
        }
    }

    if (findResponse === false) {
        console.log(currentNumber);
        break;
    }
}
