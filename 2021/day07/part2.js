const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(",")
    .map(Number);

const crabs = inputs.sort((a, b) => a - b);

let minFuel = Infinity;
for (let i = 1; i <= crabs[crabs.length - 1]; i += 1) {
    const cost = crabs.reduce(
        (acc, currentvalue) =>
            acc +
            (Math.abs(currentvalue - i) * (Math.abs(currentvalue - i) + 1)) / 2,
        0
    );

    if (cost < minFuel) {
        minFuel = cost;
    }
}

console.log(minFuel);
