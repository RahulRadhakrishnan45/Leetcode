/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const unique = new Set(candyType);
    return Math.min(unique.size, candyType.length / 2);
};