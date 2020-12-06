const inputs = require('fs')
    .readFileSync(`${__dirname}/input.txt`, 'utf8')
    .split('\r\n\r\n')
    .map((x) => x.split('\r\n'));

function findCommonElement(setA, setB) {
    const common = new Set();
    setB.forEach((element) => {
        if (setA.has(element)) {
            common.add(element);
        }
    });

    return common;
}

let count = 0;
inputs.forEach((group) => {
    if (group.length === 1) {
        count += group[0].length;
    } else {
        let uniqueAnswers = new Set();
        group.forEach((answers, index) => {
            if (index === 0) {
                [...answers].forEach((letter) => uniqueAnswers.add(letter));
            } else {
                uniqueAnswers = findCommonElement(
                    uniqueAnswers,
                    new Set([...answers])
                );
            }
        });
        count += uniqueAnswers.size;
    }
});

console.log(count);
