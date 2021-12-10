const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n");

const OPEN_CHAR = ["(", "[", "{", "<"];
const CLOSE_CHAR = [")", "]", "}", ">"];

const illegalChar = [];
const imcompleteLines = [];

for (const line of inputs) {
    let illegal = false;
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
                illegal = true;
                break;
            }
        }
    }
    if (illegal === false && tmp.length !== 0) {
        imcompleteLines.push(line);
    }
}

const missing = [];
for (const line of imcompleteLines) {
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
            }
        }
    }
    const missingChars = tmp.reverse().map((char) => {
        const indexOpenChar = OPEN_CHAR.findIndex(
            (element) => element === char
        );
        return CLOSE_CHAR[indexOpenChar];
    });
    missing.push(missingChars);
}

const MISSING_POINTS = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4,
};
const allScores = [];
for (const line of missing) {
    let score = 0;
    for (let i = 0; i < line.length; i++) {
        score *= 5;
        score += MISSING_POINTS[line[i]];
    }
    allScores.push(score);
}
const index = Math.ceil(allScores.sort((a, b) => a - b).length / 2);
console.log(allScores[index - 1]);
