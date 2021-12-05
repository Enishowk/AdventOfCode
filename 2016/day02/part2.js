const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n");

const DIGITS = [
    [undefined, undefined, 1, undefined, undefined],
    [undefined, 2, 3, 4, undefined],
    [5, 6, 7, 8, 9],
    [undefined, "A", "B", "C", undefined],
    [undefined, undefined, "D", undefined, undefined],
];
const position = {
    x: 0,
    y: 2,
};

const code = [];
for (const line of inputs) {
    const instructions = line.split("");

    for (const instruction of instructions) {
        if (instruction === "U") {
            const nextLine = DIGITS[position.y - 1];
            if (nextLine && nextLine[position.x]) {
                position.y += -1;
            }
        }
        if (instruction === "D") {
            const nextLine = DIGITS[position.y + 1];
            if (nextLine && nextLine[position.x]) {
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
