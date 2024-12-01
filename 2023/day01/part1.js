const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(/\r?\n/)
    .map((el) => el.match(/\d+/g).join(""))
    .map((el) => +`${el.at(0)}${el.at(-1)}`)
    .reduce((acc, value) => acc + value, 0);

console.log(inputs);
