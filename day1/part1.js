const fs = require("fs");
const content = fs.readFileSync(`${__dirname}/input.txt`, "utf8");

let sum = 0;
content.split(/\r?\n/).forEach(line => {
    sum += Math.floor(+line / 3) - 2;
});

console.log(sum);
