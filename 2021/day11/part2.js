const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n")
    .map((line) => line.split("").map(Number));

let FLASHED = [];
const resetFlashed = () => {
    FLASHED = Array.from({ length: inputs.length }, () =>
        Array.from({ length: inputs[0].length }, () => false)
    );
};

const flash = (y, x) => {
    if (inputs[y][x] === 9) {
        FLASHED[y][x] = true;
        inputs[y][x] = 0;
        if (inputs[y - 1]) {
            if (inputs[y - 1][x - 1] >= 0 && !FLASHED[y - 1][x - 1]) {
                flash(y - 1, x - 1);
            }
            if (!FLASHED[y - 1][x]) {
                flash(y - 1, x);
            }
            if (inputs[y - 1][x + 1] >= 0 && !FLASHED[y - 1][x + 1]) {
                flash(y - 1, x + 1);
            }
        }
        if (inputs[y + 1]) {
            if (inputs[y + 1][x - 1] >= 0 && !FLASHED[y + 1][x - 1]) {
                flash(y + 1, x - 1);
            }
            if (!FLASHED[y + 1][x]) {
                flash(y + 1, x);
            }
            if (inputs[y + 1][x + 1] >= 0 && !FLASHED[y + 1][x + 1]) {
                flash(y + 1, x + 1);
            }
        }

        if (inputs[y][x - 1] >= 0 && !FLASHED[y][x - 1]) {
            flash(y, x - 1);
        }
        if (inputs[y][x + 1] >= 0 && !FLASHED[y][x + 1]) {
            flash(y, x + 1);
        }
    } else {
        inputs[y][x] += 1;
    }
};

const shouldStop = () => {
    for (let i = 0; i < inputs.length; i += 1) {
        return inputs[i].reduce((acc, numb) => acc + numb, 0) === 0;
    }
};

let end = false;
let count = 0;
while (end === false) {
    resetFlashed();

    for (let i = 0; i < inputs.length; i += 1) {
        for (let j = 0; j < inputs[i].length; j += 1) {
            if (!FLASHED[i][j]) {
                flash(i, j);
            }
        }
    }

    end = shouldStop();
    count++;
}

console.log(count);
