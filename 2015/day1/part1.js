const content = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8');

let result = 0;
for (let i = 0; i < content.length; i += 1) {
    result += content[i] === '(' ? +1 : -1;
}

console.log(result);
