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
 * @return {number[]}
 */
var findMode = function(root) {
    let currentValue = 0
    let currentCount = 0
    let maxCount = 0
    let modes = []
    
    function inOrder(node){
        if(!node) return
        inOrder(node.left)
        currentCount = (node.val === currentValue) ? currentCount+1 : 1
        if(currentCount === maxCount) {
            modes.push(node.val)
        }
        else if(currentCount > maxCount) {
            maxCount = currentCount
            modes = [node.val]
        } 
        currentValue = node.val
        inOrder(node.right)
    }
    inOrder(root)
    return modes
};