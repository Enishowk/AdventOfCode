const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(/\r?\n/);

const numbers = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
};

const parsedLines = [];
for (const line of inputs) {
    const matches = {};
    for (const [key, value] of Object.entries(numbers)) {
        const foundString = line.matchAll(key);
        for (const match of foundString) {
            matches[match.index] = value;
        }

        const foundNumber = line.matchAll(value);
        for (const match of foundNumber) {
            matches[match.index] = value;
        }
    }

    const result = [Object.values(matches).join("")].map(
        (el) => +`${el.at(0)}${el.at(-1)}`
    );
    parsedLines.push(result[0]);
}
const sum = parsedLines.reduce((acc, value) => acc + value, 0);

console.log(sum);
