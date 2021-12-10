const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n");

const POINTS = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
};
const OPEN_CHAR = ["(", "[", "{", "<"];
const CLOSE_CHAR = [")", "]", "}", ">"];

const illegalChar = [];
for (const line of inputs) {
    const tmp = [];
    for (const char of line) {
        if (OPEN_CHAR.includes(char)) {
            tmp.push(char);
        }

        if (CLOSE_CHAR.includes(char)) {
            const lastChar = tmp[tmp.length - 1];
            const indexCloseChar = CLOSE_CHAR.findIndex(
                (element) => element === char
            );
            if (lastChar === OPEN_CHAR[indexCloseChar]) {
                tmp.pop();
            } else {
                illegalChar.push(char);
                break;
            }
        }
    }
}

const sum = illegalChar.reduce((acc, char) => acc + POINTS[char], 0);
console.log(sum);
