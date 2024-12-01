const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(/\r?\n/);

const results = {};
for (const line of inputs) {
    const [game, sets] = line.split(":");
    const [_, gameNumb] = game.split(" ");
    results[gameNumb] = {};
    const parts = sets.trim().split(";");
    for (const part of parts) {
        const cubes = part.trim().split(", ");
        for (const cube of cubes) {
            const [numb, color] = cube.split(" ");
            if (results[gameNumb][color]) {
                if (results[gameNumb][color] < +numb) {
                    results[gameNumb][color] = +numb;
                }
            } else {
                results[gameNumb][color] = +numb;
            }
        }
    }
}

let sum = 0;
for (const [_game, cube] of Object.entries(results)) {
    sum += cube.green * cube.blue * cube.red;
}
console.log(sum);
