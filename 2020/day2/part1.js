const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

function isPasswordExact(letter, min, max, password) {
    const regex = new RegExp(letter, 'g');
    const result = (password.match(regex) || []).length;

    return result >= min && result <= max;
}

let count = 0;
inputs.forEach(input => {
    const elements = input.split(' ');
    const [min, max] = elements[0].split('-');
    const letter = elements[1].slice(0, 1);
    const password = elements[2];

    if (isPasswordExact(letter, min, max, password)) {
        count += 1;
    }
});

console.log(count);
