const content = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8');

function sortNumber(a, b) {
    return a - b;
}

let ribon = 0;
content.split(/\r?\n/).forEach(line => {
    const number = line.split('x');
    const [l, w, h] = number;
    const sorted = number.sort(sortNumber);
    ribon += +sorted[0] * 2 + +sorted[1] * 2 + +l * +w * +h;
});

console.log(ribon);
