const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n");

const GRID = Array.from({ length: 1000 }, () =>
    Array.from({ length: 1000 }, () => 0)
);

const setLights = (command, x, y) => {
    if (command === "turn on") {
        GRID[y][x] += 1;
    }
    if (command === "turn off") {
        GRID[y][x] -= GRID[y][x] > 0 ? 1 : 0;
    }
    if (command === "toggle") {
        GRID[y][x] += 2;
    }
};

const regexCommand = /toggle|turn off|turn on/g;
const regexCoord = /\d+/g;
for (const line of inputs) {
    const [command] = line.match(regexCommand);
    const [x1, y1, x2, y2] = line.match(regexCoord).map(Number);

    for (let i = x1 < x2 ? x1 : x2; i <= (x1 < x2 ? x2 : x1); i += 1) {
        for (let j = y1 < y2 ? y1 : y2; j <= (y1 < y2 ? y2 : y1); j += 1) {
            setLights(command, j, i);
        }
    }
}

let sum = 0;
for (const line of GRID) {
    sum += line.reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(sum);
