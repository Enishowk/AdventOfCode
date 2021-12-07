const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n")
    .map((i) => i.split(" "));

const hasDuplicate = (arr) => {
    let duplicate = false;

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (word === arr[j]) {
                duplicate = true;
            }
        }
    }
    return duplicate;
};

let sum = 0;
for (const line of inputs) {
    if (!hasDuplicate(line)) {
        sum += 1;
    }
}

console.log(sum);
