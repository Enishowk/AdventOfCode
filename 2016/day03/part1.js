const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n")
    .map((input) => input.match(/[0-9]+/g).map((input) => +input));

let count = 0;
for (const line of inputs) {
    const [side1, side2, side3] = line.sort((a, b) => a - b);
    if (side1 + side2 > side3) {
        count += 1;
    }
}

console.log(count);
