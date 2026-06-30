function mergeTwoSortedArrays() {}

console.log(mergeTwoSortedArrays([1, 3, 5], [2, 4])) // returns [1, 2, 3, 4, 5]
console.log(mergeTwoSortedArrays([], [1, 2])) // returns [1, 2]
console.log(mergeTwoSortedArrays([1, 1], [1])) // returns [1, 1, 1]
console.log(mergeTwoSortedArrays([1, 2], [])) // returns [1, 2]
console.log(mergeTwoSortedArrays([-3, 0, 4], [-2, 2])) // returns [-3, -2, 0, 2, 4]
console.log(mergeTwoSortedArrays([], [])) // returns []
