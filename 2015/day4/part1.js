const crypto = require('crypto');

const input = 'ckczppom';

function md5(string) {
    const hash = crypto
        .createHash('MD5')
        .update(string)
        .digest('hex');

    return hash;
}

let stop = false;
while (!stop) {
    for (let i = 0; i < 1e7; i += 1) {
        const hash = md5(input + i.toString());
        if (hash.slice(0, 5) === '00000') {
            stop = true;
            console.log(i);
            break;
        }
    }
}
