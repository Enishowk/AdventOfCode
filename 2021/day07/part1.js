const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(",")
    .map(Number);

const crabs = inputs.sort((a, b) => a - b);

const median = (arr) => {
    const length = arr.length;
    if (length % 2 === 0) {
        return (arr[length / 2 - 1] + arr[length / 2]) / 2;
    }
    return [Math.floor(arr.length / 2)];
};

const fuel = (crabs, position) =>
    crabs.reduce(
        (acc, currentValue) =>
            acc +
            (currentValue > position
                ? currentValue - position
                : position - currentValue),
        0
    );

console.log(fuel(crabs, median(crabs)));
