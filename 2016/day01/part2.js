const inputs = require("fs")
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split(",")
    .map((x) => x.trim());

const point = {
    x: 0,
    y: 0,
};

const NAV = {
    n: { L: "w", R: "e", plane: "y", offset: 1 },
    e: { L: "n", R: "s", plane: "x", offset: 1 },
    s: { L: "e", R: "w", plane: "y", offset: -1 },
    w: { L: "s", R: "n", plane: "x", offset: -1 },
};

let visited = [[0, 0]];
const alreadyVisited = (coord) => {
    let isAlreadyVisited;
    for (const line of visited) {
        if (line[0] === coord[0] && line[1] === coord[1]) {
            isAlreadyVisited = true;
            break;
        }
    }
    return isAlreadyVisited;
};
const savedCoord = (plane, offset, step) => {
    let found;
    for (let i = 1; i <= step; i += 1) {
        const coord =
            plane === "y"
                ? [point.x, point.y + i * offset]
                : [point.x + i * offset, point.y];
        if (alreadyVisited(coord)) {
            found = coord;
            break;
        }
        visited.push(coord);
    }
    return found;
};

let direction;
for (const input of inputs) {
    const turn = input[0];
    const step = +input.slice(1);

    if (!direction) {
        if (turn === "R") {
            direction = "e";
            savedCoord("x", 1, step);
            point.x += step;
        }
        if (turn === "L") {
            direction = "w";
            savedCoord("x", -1, step);
            point.x -= step;
        }
    } else {
        const config = NAV[direction][turn];
        const newDirection = NAV[config];
        const alreadyVisited = savedCoord(
            newDirection.plane,
            newDirection.offset,
            step
        );
        if (alreadyVisited) {
            console.log(alreadyVisited[0] + alreadyVisited[1]);
            break;
        }
        point[newDirection.plane] += newDirection.offset * step;
        direction = config;
    }
}
