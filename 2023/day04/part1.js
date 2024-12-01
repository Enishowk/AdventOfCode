const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(/\r?\n/);

const results = {};
let score = 0;
for (const line of inputs) {
    const [game, sets] = line.split(":");
    const [_, gameNumb] = game.split(" ");
    results[gameNumb] = { win: 0 };
    const [firstSet, secondSet] = sets.trim().split(" | ");
    const winningNumbers = firstSet.split(" ").filter((el) => el !== "");
    const myNumbers = secondSet.split(" ").filter((el) => el !== "");

    for (const numb of winningNumbers) {
        if (myNumbers.includes(numb)) {
            results[gameNumb].win += 1;
        }
    }
    if (results[gameNumb].win) {
        score += Math.pow(2, results[gameNumb].win - 1);
    }
}

console.log(score);
