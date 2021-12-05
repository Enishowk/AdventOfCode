const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n")
    .map((input) => input.match(/[0-9]+/g).map((input) => +input));

let count = 0;
for (let i = 0; i < inputs.length; i += 3) {
    for (let j = 0; j < 3; j += 1) {
        const [side1, side2, side3] = [
            inputs[i + 0][j],
            inputs[i + 1][j],
            inputs[i + 2][j],
        ].sort((a, b) => a - b);
        if (side1 + side2 > side3) {
            count += 1;
        }
    }
}

console.log(count);
