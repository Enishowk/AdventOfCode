const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n\n");

const instructions = inputs[0]
    .split("\n")
    .map((input) => input.split(",").map(Number));

const folds = inputs[1]
    .split("\n")
    .map((input) => input.match(/[y|x]=\d+/g).join(""))
    .map((input) => input.split("="));

const findMaxGrid = (instructions) => {
    let maxX = 0;
    let maxY = 0;
    for (const instruction of instructions) {
        const [x, y] = instruction;
        if (x > maxX) {
            maxX = x;
        }
        if (y > maxY) {
            maxY = y;
        }
    }
    return { maxX, maxY };
};

const applyFold = (fold) => {
    const [orientation, position] = fold;
    if (orientation === "y") {
        for (let y = 0; y < position; y += 1) {
            for (let x = 0; x < GRID[y].length; x += 1) {
                GRID[y][x] =
                    GRID[2 * position - y]?.[x] === "#" ? "#" : GRID[y][x];
            }
        }
        GRID.splice(position, GRID.length - position);
    }
    if (orientation === "x") {
        for (let y = 0; y < GRID.length; y += 1) {
            for (let x = 0; x < position; x++) {
                GRID[y][x] =
                    GRID[y][2 * position - x] === "#" ? "#" : GRID[y][x];
            }
            GRID[y].splice(position, GRID[y].length - position);
        }
    }
};

let GRID = [];
const main = () => {
    const { maxX, maxY } = findMaxGrid(instructions);
    GRID = Array.from({ length: maxY + 1 }, () =>
        Array.from({ length: maxX + 1 }, () => ".")
    );

    for (const instruction of instructions) {
        const [x, y] = instruction;
        GRID[y][x] = "#";
    }

    for (const fold of folds) {
        applyFold(fold);
    }

    for (const line of GRID) {
        console.log(line.join("").replaceAll("#", "█").replaceAll(".", " "));
    }
};

main();
