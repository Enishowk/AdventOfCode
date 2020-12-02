const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split(/\r?\n/);

function isPasswordExact(letter, pos1, pos2, password) {
    const letter1 = password[pos1 - 1];
    const letter2 = password[pos2 - 1];

    return letter1 !== letter2 && (letter1 === letter || letter2 === letter);
}

let count = 0;
inputs.forEach(input => {
    const elements = input.split(' ');
    const [pos1, pos2] = elements[0].split('-');
    const letter = elements[1].slice(0, 1);
    const password = elements[2];

    if (isPasswordExact(letter, pos1, pos2, password)) {
        count += 1;
    }
});

console.log(count);
