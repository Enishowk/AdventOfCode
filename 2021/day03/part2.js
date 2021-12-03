const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

const findWantedBit = (arr, position, wantedBit, oppositeBit) => {
    if (arr.length === 2) {
        return wantedBit;
    }
    const countOne = arr.reduce((acc, line) => acc + +line[position], 0);
    return countOne >= arr.length / 2 ? wantedBit : oppositeBit;
};

const removeUnwantedBit = (arr, position, wantedBit, oppositeBit) => {
    const popularBit = findWantedBit(arr, position, wantedBit, oppositeBit);
    return popularBit === 1
        ? arr.filter((line) => line[position] === '1')
        : arr.filter((line) => line[position] === '0');
};

const findRating = (inputsArr, wantedBit, oppositeBit) => {
    let position = 0;
    let arr = [...inputsArr];

    while (arr.length > 1) {
        arr = removeUnwantedBit(arr, position, wantedBit, oppositeBit);
        position += 1;
    }

    return parseInt(arr.join(''), 2);
};

const oxygenGenerator = findRating(inputs, 1, 0);
const CO2Scrubber = findRating(inputs, 0, 1);

console.log(oxygenGenerator * CO2Scrubber);
