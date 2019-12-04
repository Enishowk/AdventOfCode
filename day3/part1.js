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
wires.forEach(wire => {
    let x = 0
    let y = 0
    const coord = new Set();
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
