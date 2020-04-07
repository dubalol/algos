/**
 * <https://leetcode.com/problems/pascals-triangle/>
 * 
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = (numRows) => {
  const res = [];

  for (let i = 0; i < numRows; i += 1) {
    const row = [];
    
    for (let k = 0; k <= i; k += 1) {
      if (k === 0) row.push(1);
      else if (k === i) row.push(1);
      else {
        row.push(res[i - 1][k - 1] + res[i - 1][k]);
      }
    }

    res.push(row);
  }

  return res;
};

module.exports = generate;
