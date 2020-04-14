/**
 * https://leetcode.com/problems/generate-parentheses/
 * 
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = function(n) {
  const res = [];

  const helper = (left = n, right = n, str = '') => {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }

    if (left > 0) helper(left - 1, right, str + '(');
    if (right > left) helper(left, right - 1, str +')');
  }

  helper();

  return res;
};

module.exports = generateParenthesis;