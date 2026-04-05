/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let l1=[],l2=[]
    while(list1){
        l1.push(list1.val)
        list1 = list1.next
    }
    while(list2) {
        l2.push(list2.val)
        list2=list2.next
    }
    let result = []
    let i=0,j=0
    while(i<l1.length&&j<l2.length) {
        if(l1[i]<l2[j]) result.push(l1[i++])
        else result.push(l2[j++])
    }
    while(i<l1.length) result.push(l1[i++])
    while(j<l2.length) result.push(l2[j++])
    let dummy = new ListNode(-1)
    let curr = dummy
    for(let val of result) {
        curr.next = new ListNode(val)
        curr = curr.next
    }
    return dummy.next
};