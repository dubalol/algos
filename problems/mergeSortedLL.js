/**
 * <https://leetcode.com/problems/merge-two-sorted-lists>
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const ListNode = require("../data_structures/ListNode");

const mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null;
  
  let res = new ListNode();
  let resP = res;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      resP.next = new ListNode(l1.val);
      resP = resP.next;
      l1 = l1.next;
    } else {
      resP.next = new ListNode(l2.val);
      resP = resP.next;
      l2 = l2.next
    }
  }

  if (!l1) resP.next = l2;
  if (!l2) resP.next = l1;

  return res.next;
};

module.exports = mergeTwoLists;