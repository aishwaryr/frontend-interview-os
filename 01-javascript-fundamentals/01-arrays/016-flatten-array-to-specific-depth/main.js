function flattenArrayToDepth() {}

console.log(flattenArrayToDepth([1, [2, [3]]], 1)) // returns [1, 2, [3]]
console.log(flattenArrayToDepth([1, [2, [3]]], 2)) // returns [1, 2, 3]
console.log(flattenArrayToDepth([1, [2]], 0)) // returns [1, [2]]
console.log(flattenArrayToDepth([], 3)) // returns []
console.log(flattenArrayToDepth([[[1]]], 1)) // returns [[1]]
console.log(flattenArrayToDepth([1, [2, [3, [4]]]], 3)) // returns [1, 2, 3, 4]
