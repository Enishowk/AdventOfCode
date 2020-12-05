const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

function decode(binary) {
    let minRow = 0;
    let maxRow = 127;
    let left = 0;
    let right = 7;

    for (let i = 0; i < binary.length; i += 1) {
        const letter = binary[i];
        if (letter === 'F') {
            maxRow = Math.floor((maxRow + minRow) / 2);
        }
        if (letter === 'B') {
            minRow = Math.floor((maxRow + minRow) / 2) + 1;
        }
        if (letter === 'L') {
            right = Math.floor((right + left) / 2);
        }
        if (letter === 'R') {
            left = Math.floor((right + left) / 2) + 1;
        }
    }

    return minRow * 8 + left;
}

const allSeatsId = [];
inputs.forEach(binary => {
    allSeatsId.push(decode(binary));
});

console.log(Math.max(...allSeatsId));
