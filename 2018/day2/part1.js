const content = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8');

// bababc

let twice = 0;
let third = 0;
content.split(/\r?\n/).forEach(word => {
    let two = 0;
    let three = 0;

    for (let i = 0; i < word.length; i += 1) {
        const regex = new RegExp(word[i], 'g');
        const found = word.match(regex);

        if (found.length === 2 && two === 0) {
            two += 1;
        }
        if (found.length === 3 && three === 0) {
            three += 1;
        }
    }

    twice += two;
    third += three;
});

console.log(twice * third);
