
// You should implement your task here.

module.exports = function towelSort (matrix) {
 return matrix ? matrix.map((elem, index) => index % 2 === 0 ? elem : elem.reverse()).flat() : []
}
