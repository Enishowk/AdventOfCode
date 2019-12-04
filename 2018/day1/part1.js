const content = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8');

let result = 0;
content.split(/\r?\n/).forEach(line => {
    result += +line;
});

console.log(result);
