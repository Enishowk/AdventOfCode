const content = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8');

function sortNumber(a, b) {
    return a - b;
}

let result = 0;
content.split(/\r?\n/).forEach(line => {
    const number = line.split('x');
    const [l, w, h] = number;
    const sorted = number.sort(sortNumber);
    result += 2 * +l * +w + 2 * +w * +h + 2 * +h * +l + +sorted[0] * +sorted[1];
});

console.log(result);
