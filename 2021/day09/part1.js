const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(/\r?\n/)
    .map((e) => e.split("").map(Number));

const hasLower = (y, x) => {
    const element = inputs[y][x];
    return (
        element >= inputs[y][x - 1] ||
        element >= inputs[y][x + 1] ||
        (inputs[y - 1] && element >= inputs[y - 1][x]) ||
        (inputs[y + 1] && element >= inputs[y + 1][x])
    );
};

let highRisk = 0;
for (let i = 0; i < inputs.length; i++) {
    for (let j = 0; j < inputs[i].length; j++) {
        if (!hasLower(i, j)) {
            highRisk += 1 + inputs[i][j];
        }
    }
}

console.log(highRisk);
