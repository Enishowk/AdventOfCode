const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(",")
    .map(Number);

const populate = (arr) => {
    arr.forEach((lanternfish, index) => {
        if (lanternfish === 0) {
            arr[index] = 6;
            arr.push(8);
        } else {
            arr[index] -= 1;
        }
    });
};

let count = 1;
while (count <= 256) {
    populate(inputs);
    count += 1;
}

console.log(inputs.length);
