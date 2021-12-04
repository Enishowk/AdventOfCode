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

const existWinner = () => {
    let boardWinner;
    BOARDS.some((board, index) => {
        const targetLines = board.target.lines;
        const targetColumns = board.target.columns;
        const existLineWin = Object.keys(targetLines).some(
            (key) => targetLines[key] === 5
        );
        const existColumnWin = Object.keys(targetColumns).some(
            (key) => targetColumns[key] === 5
        );
        if (existLineWin || existColumnWin) {
            boardWinner = index;
            return true;
        }
        return false;
    });

    return boardWinner;
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
    const boardWinner = existWinner(number);
    if (boardWinner) {
        console.log(calcScore(BOARDS[boardWinner], number));
        break;
    }
}
