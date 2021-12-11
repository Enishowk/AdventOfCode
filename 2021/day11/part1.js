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

let count = 0;
const flash = (y, x) => {
    if (inputs[y][x] === 9) {
        FLASHED[y][x] = true;
        inputs[y][x] = 0;
        count += 1;
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

for (let step = 0; step < 100; step += 1) {
    resetFlashed();

    for (let i = 0; i < inputs.length; i += 1) {
        for (let j = 0; j < inputs[i].length; j += 1) {
            if (!FLASHED[i][j]) {
                flash(i, j);
            }
        }
    }
}

console.log(count);
