const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n")
    .map((input) => input.split("->").map((input) => input.trim()));

const GRID = Array.from({ length: 1000 }, () =>
    Array.from({ length: 1000 }, () => ".")
);

const transformPoint = (x, y) => {
    if (GRID[y][x] === ".") {
        GRID[y][x] = 1;
    } else if (GRID[y][x]) {
        GRID[y][x] += 1;
    }
};

for (const line of inputs) {
    const [x1y1, x2y2] = line;
    const [x1, y1] = x1y1.split(",").map(Number);
    const [x2, y2] = x2y2.split(",").map(Number);

    if (x1 === x2) {
        for (let i = 0; i <= Math.abs(y2 - y1); i += 1) {
            transformPoint(x1, y1 < y2 ? y1 + i : y1 - i);
        }
    } else if (y1 === y2) {
        for (let i = 0; i <= Math.abs(x2 - x1); i += 1) {
            transformPoint(x1 < x2 ? x1 + i : x1 - i, y1);
        }
    } else {
        for (let i = 0; i <= Math.abs(x2 - x1); i += 1) {
            transformPoint(
                x1 < x2 ? x1 + i : x1 - i,
                y1 < y2 ? y1 + i : y1 - i
            );
        }
    }
}

let sum = 0;
for (const line of GRID) {
    sum += line.filter((element) => element >= 2).length;
}

console.log(sum);
