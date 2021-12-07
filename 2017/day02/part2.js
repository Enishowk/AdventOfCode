const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n")
    .map((i) =>
        i
            .split(/\t/)
            .map(Number)
            .sort((a, b) => a - b)
    );

let sum = 0;
for (const line of inputs) {
    for (let i = 0; i < line.length; i++) {
        const number = line[i];
        for (let j = i + 1; j < line.length; j++) {
            if (number !== line[j] && line[j] % number === 0) {
                sum += line[j] / number;
            }
        }
    }
}

console.log(sum);
