const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

const reverseBits = (bits) =>
    bits
        .split('')
        .map((bit) => (bit === '1' ? 0 : 1))
        .join('');

const mostPopularBit = (arr, position) => {
    const countOne = arr.reduce((acc, line) => acc + +line[position], 0);
    return countOne > arr.length / 2 ? '1' : '0';
};

let bits = '';
for (let i = 0; i < inputs[0].length; i += 1) {
    bits += mostPopularBit(inputs, i);
}

const gammaRate = parseInt(bits, 2);
const epsilonRate = parseInt(reverseBits(bits), 2);

console.log(gammaRate * epsilonRate);
