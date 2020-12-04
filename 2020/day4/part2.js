const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split('\n\n')
    .map(input => input.replace(/\n/g, ' '));

function hasRequiredFields(input) {
    const regex = /(byr|iyr|eyr|hgt|hcl|ecl|pid)/g;
    return input.match(regex).length === 7;
}

function isValidFields(fields) {
    const [element, value] = fields.split(':');

    if (element === 'byr') {
        return +value >= 1920 && +value <= 2002;
    }
    if (element === 'iyr') {
        return +value >= 2010 && +value <= 2020;
    }
    if (element === 'eyr') {
        return +value >= 2020 && +value <= 2030;
    }
    if (element === 'hgt') {
        const unit = value.slice(-2);
        const unitValue = value.slice(0, -2);
        if (unit === 'cm') {
            return +unitValue >= 150 && +unitValue <= 193;
        }
        if (unit === 'in') return +unitValue >= 59 && +unitValue <= 76;
    }
    if (element === 'hcl') {
        return RegExp(/^#[0-9a-f]{6}$/).test(value);
    }
    if (element === 'ecl') {
        return RegExp(/^(amb|blu|brn|gry|grn|hzl|oth)$/).test(value);
    }
    if (element === 'pid') {
        return RegExp(/^\d{9}$/).test(value);
    }
    if (element === 'cid') {
        return true;
    }
    return false;
}

let count = 0;
const passportsWithAllFields = inputs.filter(hasRequiredFields);
for (let i = 0; i < passportsWithAllFields.length; i += 1) {
    const fields = passportsWithAllFields[i].split(' ');
    if (fields.every(isValidFields)) {
        count += 1;
    }
}
console.log(count);
