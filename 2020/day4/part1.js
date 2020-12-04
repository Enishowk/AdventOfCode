const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split('\n\n')
    .map(input => input.replace(/\n/g, ' '));

function hasRequiredFields(input) {
    const regex = /(byr|iyr|eyr|hgt|hcl|ecl|pid)/g;
    return input.match(regex).length === 7;
}

let count = 0;
inputs.forEach(input => {
    if (hasRequiredFields(input)) {
        count += 1;
    }
});

console.log(count);
