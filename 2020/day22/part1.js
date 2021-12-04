const [input1, input2] = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split('\n\n');

const player1 = input1
    .split(/\n/)
    .slice(1)
    .map((x) => +x);
const player2 = input2
    .split(/\n/)
    .slice(1)
    .map((x) => +x);

while (player1.length > 0 && player2.length > 0) {
    if (player1[0] > player2[0]) {
        player1.push(player1[0]);
        player1.shift();
        player1.push(player2[0]);
        player2.shift();
    } else {
        player2.push(player2[0]);
        player2.shift();
        player2.push(player1[0]);
        player1.shift();
    }
}

const winner = player1.length > 0 ? player1 : player2;

const sum = winner
    .reverse()
    .reduce((acc, current, index) => acc + current * (index + 1), 0);

console.log(sum);
