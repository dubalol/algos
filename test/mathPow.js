const assert = require('assert');

const myPow = require('../problems/mathPow');

describe('Implement exponential', () => {
  it('should return a correct result', () => {
    const test1 = myPow(4, 2);
    assert.equal(test1, 16);
  })
})