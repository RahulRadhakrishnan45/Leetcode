/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    if(numRows === 0) return result
    let firstRow = [1]
    result.push(firstRow)
    for(let i=1;i<numRows;i++){
        let prevRow = result[i-1]
        let currRow = [1]

        for(let j=1;j<i;j++){
            currRow.push(prevRow[j-1]+prevRow[j])
        }
        currRow.push(1)
        result.push(currRow)
    }
    return result
};