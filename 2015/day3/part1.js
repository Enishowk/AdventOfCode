const content = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8');

let x = 0;
let y = 0;
const coord = new Set();
for (let i = 0; i < content.length; i += 1) {
    if (content[i] === '^') {
        y -= 1;
    }
    if (content[i] === 'v') {
        y += 1;
    }
    if (content[i] === '>') {
        x += 1;
    }
    if (content[i] === '<') {
        x -= 1;
    }
    coord.add(`${x},${y}`);
}

console.log(coord.size);
