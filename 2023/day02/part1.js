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
            if (color === "red" && +numb > 12) {
                results[gameNumb].impossible = true;
            }
            if (color === "green" && +numb > 13) {
                results[gameNumb].impossible = true;
            }
            if (color === "blue" && +numb > 14) {
                results[gameNumb].impossible = true;
            }
        }
    }
}

let sum = 0;
for (const [game, cube] of Object.entries(results)) {
    if (!cube.impossible) {
        sum += +game;
    }
}
console.log(sum);
