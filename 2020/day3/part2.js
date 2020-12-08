const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
];

let allTrees = 1;
slopes.forEach((slope) => {
    let tree = 0;
    let x = 0;
    for (let y = slope[1]; y < inputs.length; y += slope[1]) {
        x = (x + slope[0]) % inputs[y].length;
        if (inputs[y][x] === '#') {
            tree += 1;
        }
    }
    allTrees *= tree;
});

console.log(allTrees);
