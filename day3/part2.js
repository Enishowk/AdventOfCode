const content = require("fs").readFileSync(`${__dirname}/input.txt`, "utf8");

const wires = []
content.split(/\r?\n/).forEach(line => {
    const wire = [];
    line.split(/,/).forEach(line => {
        wire.push(line)
    });
    wires.push(wire)
});

const coords = []
const allSteps = []
wires.forEach(wire => {
    let x = 0
    let y = 0
    const coord = new Set();
    const steps = {};
    let countSteps = 0;

    wire.forEach(instruction => {
        const numb = instruction.match(/\d+$/g)[0];
        const direction = instruction[0];

        for (i = numb; i > 0; i--) {
            if (direction === "R") {
                x++;
            }
            if (direction === "L") {
                x--;
            }
            if (direction === "D") {
                y--;
            }
            if (direction === "U") {
                y++;
            }
            coord.add(`${x},${y}`);
            countSteps++;
            steps[`${x},${y}`] = countSteps;
        }
    });
    coords.push(coord)
    allSteps.push(steps)
})

const commonCoord = [];
const [first, second] = coords;
first.forEach(coord => {
    if (second.has(coord)) {
        commonCoord.push(coord);
    }
})

let minSteps = 1e10;
const [stepsFirst, stepsSecond] = allSteps;
commonCoord.forEach(coord => {
    const totalSteps = stepsFirst[coord] + stepsSecond[coord]
    if (totalSteps < minSteps) {
        minSteps = totalSteps;
    }
})

console.log(minSteps);
