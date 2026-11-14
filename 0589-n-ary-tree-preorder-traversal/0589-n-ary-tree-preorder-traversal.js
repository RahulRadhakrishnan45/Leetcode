/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const arr = []
    
    const preOrder = ((root) => {
        if(!root) return arr
        arr.push(root.val)
        for(let child of root.children)
            preOrder(child)
    })
    preOrder(root)
    return arr
};