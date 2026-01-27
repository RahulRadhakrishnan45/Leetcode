/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head
    let pre = null
    let set = new Set()
    while(curr) {
        if(set.has(curr.val)) {
            pre.next = curr.next
        }else{
            set.add(curr.val)
            pre = curr
        }
        curr = curr.next
    }
    return head
};