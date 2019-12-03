const fs = require("fs");
const content = fs.readFileSync(`${__dirname}/input.txt`, "utf8");

const wires = []
content.split(/\r?\n/).forEach(line => {
    const wire = [];
    line.split(/,/).forEach(line => {
        wire.push(line)
    });
    wires.push(wire)
});

const coords = []
wires.forEach(wire => {
    let x = 0
    let y = 0
    const coord = new Set();
    wire.forEach(instruction => {
        const numb = instruction.match(/\d+$/g)[0];
        const direction = instruction[0];

        if (direction === "R") {
            for (i = numb; i > 0; i--) {
                x++;
                coord.add(`${x},${y}`);
            }
        }
        if (direction === "L") {
            for (i = numb; i > 0; i--) {
                x--;
                coord.add(`${x},${y}`);
            }
        }
        if (direction === "D") {
            for (i = numb; i > 0; i--) {
                y--;
                coord.add(`${x},${y}`);
            }
        }
        if (direction === "U") {
            for (i = numb; i > 0; i--) {
                y++;
                coord.add(`${x},${y}`);
            }
        }
    });
    coords.push(coord)
})

const commonCoord = [];
const [first, second] = coords;
first.forEach(coord => {
    if (second.has(coord)) {
        commonCoord.push(coord);
    }
})

const distance = []
commonCoord.forEach(coord => {
    const [x, y] = coord.split(`,`);
    const manhattanDistance = Math.abs(x) + Math.abs(y);
    distance.push(manhattanDistance);
})

console.log(Math.min(...distance));
