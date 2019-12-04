let count = 0;
for (let j = 359282; j <= 820401; j += 1) {
    const str = j.toString();
    let neverDecrease = false;
    let hasSameDigit = false;

    for (let i = 0; i < str.length - 1; i += 1) {
        const prev = str[i - 1];
        const first = str[i];
        const second = str[i + 1];
        const third = str[i + 2];
        if (first === second && first !== prev && first !== third) {
            hasSameDigit = true;
        }
        if (+first <= +second) {
            neverDecrease = true;
        } else {
            neverDecrease = false;
            break;
        }
    }
    if (hasSameDigit && neverDecrease) {
        count += 1;
    }
}

console.log(count);
