const content = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8');

let result = 0;
const twice = [];
let stop = false;
const response = [];

const loop = () =>
    content.split(/\r?\n/).forEach(line => {
        result += +line;

        if (twice.includes(result)) {
            response.push(result);
            stop = true;
        }
        twice.push(result);
    });

while (!stop) {
    loop();
}

console.log(response.shift());
