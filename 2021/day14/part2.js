const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n\n");

const polymer = inputs[0];
const nextPairs = inputs[1].split("\n").reduce((acc, rule) => {
    const [couple, letter] = rule.split(" -> ");
    acc[couple] = [couple[0] + letter, letter + couple[1]];
    return acc;
}, {});

const minMax = (elCounts) => ({
    min: Math.min(...Object.values(elCounts)),
    max: Math.max(...Object.values(elCounts)),
});

let pairCounts = {};
const steps = 40;
for (let i = 0; i < polymer.length - 1; i++) {
    const pair = polymer.slice(i, i + 2);
    pairCounts[pair] = (pairCounts[pair] ?? 0) + 1;
}

for (let step = 0; step < steps; step++) {
    const nextPairCounts = {};
    for (const pair in pairCounts) {
        for (const nextPair of nextPairs[pair]) {
            nextPairCounts[nextPair] =
                (nextPairCounts[nextPair] ?? 0) + pairCounts[pair];
        }
    }
    pairCounts = nextPairCounts;
}

const elCounts = {
    [polymer[0]]: 1,
};
for (const pair in pairCounts) {
    elCounts[pair[1]] =
        (elCounts[pair[1]] ? elCounts[pair[1]] : 0) + pairCounts[pair];
}

const { min, max } = minMax(elCounts);
console.log(max - min);
