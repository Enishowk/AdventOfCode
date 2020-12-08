const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split('\r\n\r\n')
    .map((x) => x.split('\r\n'));

let count = 0;
inputs.forEach((group) => {
    const uniqueAnswers = new Set();
    group.forEach((answers) => {
        [...answers].forEach((letter) => uniqueAnswers.add(letter));
    });
    count += uniqueAnswers.size;
});

console.log(count);
