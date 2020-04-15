/**
 * https://leetcode.com/problems/powx-n/submissions/
 * 
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  let absN = Math.abs(n);

  let res = absN % 2 === 0 ? myPow(x * x, absN / 2) : myPow(x * x, (absN - 1) / 2) * x;

  if (n < 0) return 1 / res;
  else return res;
};

module.exports = myPow;