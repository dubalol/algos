/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Current solution is O(M + N) time
// LeetCode challenge is O(log(M + N)) time
const findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length === 0) return getMedian(nums2);
  if (nums2.length === 0) return getMedian(nums1);
  if (nums1.length === 1 && nums2.length === 1) return (nums1[0] + nums2[0]) / 2;

  const combinedLength = nums1.length + nums2.length;
  const lengthIsEven = combinedLength % 2 === 0 ? 1 : 0;

  let last;
  let curr;
  let count = 0;

  let p1 = 0, p2 = 0;

  while (count <= (combinedLength / 2)) {
    last = curr;

    if (p1 === nums1.length) {
      curr = nums2[p2];
      p2 += 1;
    } else if (p2 === nums2.length) {
      curr = nums1[p1];
      p1 += 1;
    } else if (nums1[p1] <= nums2[p2]) {
      curr = nums1[p1];
      p1 += 1;
    } else {
      curr = nums2[p2];
      p2 += 1;
    }
    count += 1;
  }
  console.log(last, curr, count)
  if (lengthIsEven) return (curr + last) / 2;
  else return curr;
};

const getMedian = (arr) => {
  const mid = arr.length / 2;
  if (arr.length % 2 === 0) return (arr[mid - 1] + arr[mid]) / 2;
  else return arr[Math.floor(mid)];
}

module.exports = findMedianSortedArrays;
