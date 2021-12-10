const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n");

const UNIQUE_NUMBER = [2, 3, 4, 7];

let sum = 0;
for (const line of inputs) {
    const [_, part2] = line.split(" | ").map((words) => words.split(" "));

    sum += part2.reduce(
        (acc, word) => (UNIQUE_NUMBER.includes(word.length) ? acc + 1 : acc),
        0
    );
}

console.log(sum);
