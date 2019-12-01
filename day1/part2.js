const fs = require("fs");
const content = fs.readFileSync(`${__dirname}/input.txt`, "utf8");

let total = 0;

function calcRealFuel(fuel) {
  const realFuel = Math.floor(+fuel / 3) - 2;
  if (realFuel <= 0) {
    return 0;
  } else {
    total += realFuel;
    return calcRealFuel(realFuel);
  }
}

content.split(/\r?\n/).forEach(line => {
  calcRealFuel(line);
});

console.log(total);
