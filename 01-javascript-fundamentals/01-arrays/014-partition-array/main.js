function partitionArray() {}

console.log(partitionArray([1, 2, 3, 4], n => n % 2 === 0)) // returns [2, 4, 1, 3]
console.log(partitionArray(["a", "bb", "c"], s => s.length === 1)) // returns ["a", "c", "bb"]
console.log(partitionArray([], item => Boolean(item))) // returns []
console.log(partitionArray([1, 3, 5], n => n % 2 === 0)) // returns [1, 3, 5]
console.log(partitionArray([2, 4, 6], n => n % 2 === 0)) // returns [2, 4, 6]
console.log(partitionArray([0, 1, 2, 3], n => n > 1)) // returns [2, 3, 0, 1]
