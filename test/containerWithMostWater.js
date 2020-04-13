const assert = require('assert');

const maxArea = require('../problems/containerWithMostWater');

describe('Find Container With Most Water', () => {
  it('should return the correct amount with a normal input', () => {
    const test1 = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])

    assert.equal(test1, 49);
  })
})