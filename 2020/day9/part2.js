const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/)
    .map(x => +x);

function findError(preambule) {
    for (let i = preambule; i < inputs.length; i += 1) {
        const currentNumber = inputs[i];
        const previousNumber = inputs.slice(i - preambule, i);

        let findResponse = false;
        for (let j = 0; j < previousNumber.length; j += 1) {
            const element = previousNumber[j];
            const previousNumberWithoutElement = previousNumber.slice(j);
            if (
                previousNumberWithoutElement.includes(currentNumber - element)
            ) {
                findResponse = true;
            }
        }

        if (findResponse === false) {
            return currentNumber;
        }
    }
    return 'No number found.';
}

const errorNumber = findError(25);

function findRange(start) {
    let i = start;
    let count = 0;
    while (true) {
        count += inputs[i];

        if (count > errorNumber) {
            return findRange(start + 1);
        }
        if (count === errorNumber) {
            const range = inputs.slice(start, i);
            return Math.min(...range) + Math.max(...range);
        }
        i += 1;
    }
}

console.log(findRange(0));
