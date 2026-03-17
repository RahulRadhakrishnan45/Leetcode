/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let res = []
    let curr = head
    while(curr) {
        res.push(curr.val)
        curr = curr.next
    }
    let l=0,r=res.length-1
    while(l<r) {
        if(res[l] !== res[r]) return false
        l++
        r--
    }
    return true
};