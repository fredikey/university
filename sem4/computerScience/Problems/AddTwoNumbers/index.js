// ref - https://leetcode.com/problems/add-two-numbers/

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

export const addTwoNumbers = (l1, l2) => {
	const sum = new ListNode()
	let cur = sum
	while (l1 || l2) {
		const res = cur.val + (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
		cur.val = res % 10
		l1 = l1 && l1.next
		l2 = l2 && l2.next
		if (l1 || l2 || Math.floor(res / 10)) {
			cur.next = new ListNode(Math.floor(res / 10))
			cur = cur.next
		}
	}
	return sum
}
