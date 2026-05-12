/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let c=0
    let result = null
    function reverseInorder(node) {
        if(!node || result != null) return
        reverseInorder(node.left)
        c++
        if(c===k) {
            result = node.val
            return
        }
        reverseInorder(node.right)
    }
    reverseInorder(root)
    return result
};