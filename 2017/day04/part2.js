const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n")
    .map((i) => i.split(" "));

const hasAnagrams = (arr) => {
    let anagram = false;

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (
                word.split("").sort().join("") ===
                arr[j].split("").sort().join("")
            ) {
                anagram = true;
            }
        }
    }
    return anagram;
};

let sum = 0;
for (const line of inputs) {
    if (!hasAnagrams(line)) {
        sum += 1;
    }
}

console.log(sum);
