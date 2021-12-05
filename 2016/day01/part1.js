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

let direction;
for (const input of inputs) {
    const turn = input[0];
    const step = +input.slice(1);

    if (!direction) {
        if (turn === "R") {
            point.x += step;
            direction = "e";
        }
        if (turn === "L") {
            point.x -= step;
            direction = "w";
        }
    } else {
        const config = NAV[direction][turn];
        const newDirection = NAV[config];
        point[newDirection.plane] += newDirection.offset * step;
        direction = config;
    }
}

console.log(point.x + point.y);
