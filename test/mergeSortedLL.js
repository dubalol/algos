const assert = require('assert');

const mergeSortedLL = require('../problems/mergeSortedLL');
const ListNode = require("../data_structures/ListNode");

describe('Merge Sorted Linked Lists', function() {
  it('should merge two sorted linked lists of equal length', function() {
    const list1Head = new ListNode(1);
    const list1Node1 = new ListNode(3);
    list1Head.next = list1Node1;
    const list1Node2 = new ListNode(5);
    list1Node1.next = list1Node2;

    const list2Head = new ListNode(2);
    const list2Node1 = new ListNode(4);
    list2Head.next = list2Node1;
    const list2Node2 = new ListNode(6);
    list2Node1.next = list2Node2;

    const result = mergeSortedLL(list1Head, list2Head);

    assert.equal(result.val, 1);
    assert.equal(result.next.val, 2);
    assert.equal(result.next.next.val, 3);
    assert.equal(result.next.next.next.val, 4);
    assert.equal(result.next.next.next.next.val, 5);
    assert.equal(result.next.next.next.next.next.val, 6);
  });

  it('should merge two sorted linked lists of different length', function() {
    const list1Head = new ListNode(1);

    const list2Head = new ListNode(2);
    const list2Node1 = new ListNode(4);
    list2Head.next = list2Node1;
    const list2Node2 = new ListNode(6);
    list2Node1.next = list2Node2;

    const result = mergeSortedLL(list1Head, list2Head);

    assert.equal(result.val, 1);
    assert.equal(result.next.val, 2);
    assert.equal(result.next.next.val, 4);
    assert.equal(result.next.next.next.val, 6);
  });

});
