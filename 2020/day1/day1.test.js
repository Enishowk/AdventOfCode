const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

const INPUT = [1721, 979, 366, 299, 675, 1456];

describe('Day 1 - Part One', () => {
    it('should return correct answer with input', () => {
        assert.strictEqual(part1(INPUT), 514579);
    });
});

describe('Day 1 - Part two', () => {
    it('should return correct answer with input', () => {
        assert.strictEqual(part2(INPUT), 241861950);
    });
});
