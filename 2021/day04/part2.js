const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(/\n\n/);

const numbers = inputs[0].split(",").map((x) => +x);
const boards = inputs.slice(1);

const BOARDS = [];
boards.forEach((board, index) => {
    BOARDS[index] = {
        grid: board
            .split("\n")
            .map((line) => line.match(/[0-9]+/g).map((x) => +x)),
        target: {
            lines: {},
            columns: {},
        },
    };
});

const containNumber = (board, number) => {
    board.grid.forEach((line, index) => {
        const columnIndex = line.findIndex((element) => element === number);
        if (columnIndex > -1) {
            // lines
            board.target.lines[index] = board.target.lines[index]
                ? (board.target.lines[index] += 1)
                : 1;
            // columns
            board.target.columns[columnIndex] = board.target.columns[
                columnIndex
            ]
                ? (board.target.columns[columnIndex] += 1)
                : 1;
        }
    });
};

const winner = new Set();
let lastNumberWin;
const existWinner = (number) => {
    BOARDS.forEach((board, index) => {
        const targetLines = board.target.lines;
        const targetColumns = board.target.columns;
        const existLineWin = Object.keys(targetLines).some(
            (key) => targetLines[key] === 5
        );
        const existColumnWin = Object.keys(targetColumns).some(
            (key) => targetColumns[key] === 5
        );
        if (existLineWin || existColumnWin) {
            if (!winner.has(index)) {
                lastNumberWin = number;
                winner.add(index);
            }
        }
    });
};

const removeItems = (allNumbers, targetNumbers) =>
    allNumbers.filter((numb) => !targetNumbers.includes(numb));

const calcScore = (board, lastNumber) => {
    const allNumbers = board.grid.flat(1);
    const targetNumbers = numbers.slice(
        0,
        numbers.findIndex((number) => number === lastNumber) + 1
    );
    const sumValue = removeItems(allNumbers, targetNumbers).reduce(
        (acc, currentValue) => acc + currentValue,
        0
    );
    return sumValue * lastNumber;
};

for (const number of numbers) {
    BOARDS.forEach((board) => {
        containNumber(board, number);
    });
    existWinner(number);
}

console.log(calcScore(BOARDS[Array.from(winner).pop()], lastNumberWin));
