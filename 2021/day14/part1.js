const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n\n");

const polymer = inputs[0].split("");
const instructions = inputs[1].split("\n").map((input) => input.split(" -> "));

const countOccurences = (polymer) => {
    result = {};
    for (let i = 0; i < polymer.length; i++) {
        if (!result[polymer[i]]) result[polymer[i]] = 0;
        result[polymer[i]] += 1;
    }

    let min = Infinity;
    let max = 0;
    for (const [key, value] of Object.entries(result)) {
        if (value < min) {
            min = value;
        }
        if (value > max) {
            max = value;
        }
    }

    return { min, max };
};

const steps = 10;
for (let i = 0; i < steps; i++) {
    const saveLetters = [];
    for (let j = 0; j < polymer.length; j++) {
        const couple = polymer[j] + polymer[j + 1];

        for (let k = 0; k < instructions.length; k++) {
            const [couple2, letter] = instructions[k];

            if (couple === couple2) {
                saveLetters.push([j + 1, letter]);
            }
        }
    }

    for (let l = 0; l < saveLetters.length; l++) {
        const [position, letter] = saveLetters[l];
        polymer.splice(position + l, 0, letter);
    }
}
const { min, max } = countOccurences(polymer);
console.log(max - min);
