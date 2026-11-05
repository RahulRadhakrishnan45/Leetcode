/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) return 0;

    let maxHeight = 0;
    for(const child of root.children){
        maxHeight = Math.max(maxHeight, maxDepth(child));
    }

    return 1 + maxHeight;
};