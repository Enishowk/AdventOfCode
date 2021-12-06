const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(",")
    .map(Number);

const fishes = Array(9).fill(0);
for (let i = 0; i < 9; i += 1) {
    fishes[i] = inputs.filter((input) => input === i).length;
}

const DAYS = 256;
for (let i = 0; i < DAYS; i += 1) {
    const expiredCount = fishes[0];
    for (let j = 1; j < 9; j += 1) {
        fishes[j - 1] = fishes[j];
    }
    fishes[6] += expiredCount;
    fishes[8] = expiredCount;
}

const sum = fishes.reduce((acc, currentvalue) => acc + currentvalue);
console.log(sum);
