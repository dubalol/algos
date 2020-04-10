const assert = require('assert');

const findMedianSortedArrays = require('../problems/findMedianSortedArrays');

describe('Find Median of Sorted Arrays', () => {
  it('should return the median', () => {
    const test1 = findMedianSortedArrays([1, 2], [3])
    const test2 = findMedianSortedArrays([1, 2], [3, 4])

    assert.equal(test1, 2);
    assert.equal(test2, 2.5);
  })
})