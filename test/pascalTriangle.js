const assert = require('assert');

const pascalTriangle = require('../problems/pascalTriangle');

describe('Pascals Triangle', () => {
  it('should return an empty array if given 0', () => {
    assert.deepStrictEqual(pascalTriangle(0), []);
  })

  it('should return a correct result if given a natural number', () => {
    assert.deepStrictEqual(
      pascalTriangle(5),
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
      ]
    );
  })
})