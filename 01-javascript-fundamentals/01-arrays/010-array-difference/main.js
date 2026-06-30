function arrayDifference() {}

console.log(arrayDifference([1, 2, 2, 3], [2])) // returns [1, 3]
console.log(arrayDifference(["a", "b", "a"], ["c"])) // returns ["a", "b"]
console.log(arrayDifference([], [1])) // returns []
console.log(arrayDifference([1, 2, 3], [])) // returns [1, 2, 3]
console.log(arrayDifference([1, 1, 2, 2], [1])) // returns [2]
console.log(arrayDifference([true, false, true], [false])) // returns [true]
