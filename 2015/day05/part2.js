const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n");

const hasTwoLettersAppearsTwice = (string) => {
    let appearsTwice = false;
    for (let i = 0; i < string.length - 2; i += 1) {
        for (let j = i + 2; j < string.length; j += 1) {
            if (string[j] + string[j + 1] === string[i] + string[i + 1]) {
                appearsTwice = true;
            }
        }
    }
    return appearsTwice;
};

const hasLetterRepeat = (string) => {
    let hasLetterRepeat = false;
    for (let i = 0; i < string.length; i += 1) {
        if (string[i] === string[i + 2]) {
            hasLetterRepeat = true;
        }
    }
    return hasLetterRepeat;
};

let count = 0;
for (const string of inputs) {
    if (hasTwoLettersAppearsTwice(string) && hasLetterRepeat(string)) {
        count += 1;
    }
}

console.log(count);
