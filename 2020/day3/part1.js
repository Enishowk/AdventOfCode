const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

let tree = 0;
let x = 0;
for (let y = 1; y < inputs.length; y += 1) {
    x = (x + 3) % inputs[y].length;
    if (inputs[y][x] === '#') {
        tree += 1;
    }
}

console.log(tree);
