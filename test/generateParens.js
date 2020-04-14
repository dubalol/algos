const assert = require('assert');

const generateParens = require('../problems/generateParens');

describe('Generate Parens', () => {
  it('should return a valid input', () => {
    const test1 = generateParens(3)

    assert.deepStrictEqual(
      test1,
      [
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
      ]
    );
  })
})