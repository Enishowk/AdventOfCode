const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(/\r?\n/);

let results = {};
for (const line of inputs) {
    const [card, sets] = line.split(": ");
    const cardNumb = card.match(/\d+/g);
    const winningNumbers = sets
        .split(" | ")[0]
        .split(" ")
        .filter((el) => el !== "");
    const myNumbers = sets
        .split(" | ")[1]
        .split(" ")
        .filter((el) => el !== "");

    results[cardNumb] = { win: 0, scraps: 1 };
    for (const numb of winningNumbers) {
        if (myNumbers.includes(numb)) {
            results[cardNumb].win += 1;
        }
    }
}

let score = 0;
for (const [game, value] of Object.entries(results)) {
    for (let j = 0; j < value.scraps; j++) {
        for (let index = 0; index < value.win; index++) {
            results[+game + index + 1].scraps = results[+game + index + 1]
                .scraps
                ? results[+game + index + 1].scraps + 1
                : 1;
        }
    }
    score += value.scraps;
}

console.log(score);
