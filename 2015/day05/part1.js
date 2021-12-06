const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n");

const VOWELS = ["a", "e", "i", "o", "u"];
const hasThreeVowels = (string) =>
    string.split("").filter((letter) => VOWELS.includes(letter)).length >= 3;

const hasLettersAppearsTwice = (string) => {
    let appearsTwice = false;
    for (let i = 0; i < string.length; i += 1) {
        if (string[i] && string[i + 1] && string[i] === string[i + 1]) {
            appearsTwice = true;
        }
    }
    return appearsTwice;
};

const UNAUTHORIZED_STRING = ["ab", "cd", "pq", "xy"];
const onlyAuthorizedString = (string) => {
    let authorized = true;
    for (let i = 0; i < string.length; i += 1) {
        if (UNAUTHORIZED_STRING.includes(string[i] + string[i + 1])) {
            authorized = false;
        }
    }
    return authorized;
};

let count = 0;
for (const string of inputs) {
    if (
        hasThreeVowels(string) &&
        hasLettersAppearsTwice(string) &&
        onlyAuthorizedString(string)
    ) {
        count += 1;
    }
}

console.log(count);
