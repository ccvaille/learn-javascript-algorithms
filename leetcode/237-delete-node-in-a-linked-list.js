/**
 * https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。
 * 传入函数的唯一参数为 要被删除的节点
 * 输入：head = [4,5,1,9], node = 5
 * 输出：[4,1,9]
 * 链表至少包含两个节点。
 * 链表中所有节点的值都是唯一的。
 * 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 把要删除节点的值改成下个节点的值
  node.val = node.next.val;
  // 删除下个节点
  node.next = node.next.next;
};
