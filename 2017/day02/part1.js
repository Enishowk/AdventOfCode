const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n")
    .map((i) => i.split(/\t/).map(Number));

let sum = 0;
for (const line of inputs) {
    sum += Math.max(...line) - Math.min(...line);
}

console.log(sum);
