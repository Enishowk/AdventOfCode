const crypto = require('crypto');

const input = 'ckczppom';

const md5 = string =>
    crypto
        .createHash('MD5')
        .update(string)
        .digest('hex');

let i = 0;
while (i >= 0) {
    if (md5(input + i.toString()).slice(0, 6) === '000000') {
        console.log(i);
        break;
    }
    i += 1;
}
