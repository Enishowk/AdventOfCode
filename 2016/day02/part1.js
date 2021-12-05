const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n");

const DIGITS = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const position = {
    x: 1,
    y: 1,
};

const code = [];
for (const line of inputs) {
    const instructions = line.split("");

    for (const instruction of instructions) {
        if (instruction === "U") {
            const nextLine = DIGITS[position.y - 1];
            if (nextLine) {
                position.y += -1;
            }
        }
        if (instruction === "D") {
            const nextLine = DIGITS[position.y + 1];
            if (nextLine) {
                position.y += 1;
            }
        }
        if (instruction === "L") {
            const nextDigit = DIGITS[position.y][position.x - 1];
            if (nextDigit) {
                position.x += -1;
            }
        }
        if (instruction === "R") {
            const nextColumn = DIGITS[position.y][position.x + 1];
            if (nextColumn) {
                position.x += 1;
            }
        }
    }
    code.push(DIGITS[position.y][position.x]);
}

console.log(code.join(""));
