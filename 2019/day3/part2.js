const content = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8');

const wires = [];
content.split(/\r?\n/).forEach(line => {
    const wire = [];
    line.split(/,/).forEach(el => {
        wire.push(el);
    });
    wires.push(wire);
});

const coords = [];
const allSteps = [];
wires.forEach(wire => {
    let x = 0;
    let y = 0;
    const coord = new Set();
    const steps = {};
    let countSteps = 0;

    wire.forEach(instruction => {
        const numb = instruction.match(/\d+$/g)[0];
        const direction = instruction[0];

        for (let i = numb; i > 0; i -= 1) {
            if (direction === 'R') {
                x += 1;
            }
            if (direction === 'L') {
                x -= 1;
            }
            if (direction === 'D') {
                y -= 1;
            }
            if (direction === 'U') {
                y += 1;
            }
            coord.add(`${x},${y}`);
            countSteps += 1;
            steps[`${x},${y}`] = countSteps;
        }
    });
    coords.push(coord);
    allSteps.push(steps);
});

const commonCoord = [];
const [first, second] = coords;
first.forEach(coord => {
    if (second.has(coord)) {
        commonCoord.push(coord);
    }
});

let minSteps = 1e10;
const [stepsFirst, stepsSecond] = allSteps;
commonCoord.forEach(coord => {
    const totalSteps = stepsFirst[coord] + stepsSecond[coord];
    if (totalSteps < minSteps) {
        minSteps = totalSteps;
    }
});

console.log(minSteps);
