const scores = {
    p1: 0,
    p2: 0,
};

const spaces = {
    p1: 8,
    p2: 3,
};

let stop = false;
let turn = 1;
while (!stop) {
    const totalP1 = turn + (turn + 1) + (turn + 2);
    const restP1 = (totalP1 + spaces.p1) % 10;
    spaces.p1 = restP1 === 0 ? 10 : restP1;
    scores.p1 += spaces.p1;
    if (scores.p1 >= 1000) {
        stop = true;
        console.log(scores.p2 * (turn + 2));
    }

    const totalP2 = turn + 3 + (turn + 4) + (turn + 5);
    const restP2 = (totalP2 + spaces.p2) % 10;
    spaces.p2 = restP2 === 0 ? 10 : restP2;
    scores.p2 += spaces.p2;
    if (scores.p2 >= 1000) {
        stop = true;
        console.log(scores.p1 * (turn + 2));
    }
    turn += 6;
}
