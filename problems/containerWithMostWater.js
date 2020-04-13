/**
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * @param {number[]} height
 * @return {number}
 */

const maxArea = function(heights) {
  // Brute Force - check all containers.  O(N^2) time complexity
  // let res = -Infinity;
  // for (let i = 0; i < heights.length; i += 1) {
  //   for (let k = i + 1; k < heights.length; k += 1) {
  //     res = Math.max(
  //       res,
  //       (k - i) * Math.min(heights[i], heights[k])
  //     )
  //   }
  // }
  // return res;

  // ---

  // Two Pointers
  let left = 0;
  let right = heights.length - 1;
  let maxArea = (right - left) * Math.min(heights[left], heights[right]);

  while (right > left) {
    maxArea = Math.max(maxArea, (right - left) * Math.min(heights[left], heights[right]));
    if (heights[right] > heights[left]) left += 1;
    else right -= 1;
  }
  return maxArea;
};

module.exports = maxArea;