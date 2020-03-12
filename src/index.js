// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    }
    let reversed = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            reversed.push(matrix[i]);
        } else {
            reversed.push(matrix[i].reverse());
        }
    }
    return (merged = [].concat.apply([], reversed));
};
