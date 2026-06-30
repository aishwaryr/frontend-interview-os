function zipTwoArrays() {}

console.log(zipTwoArrays([1, 2], ["a", "b"])) // returns [[1, "a"], [2, "b"]]
console.log(zipTwoArrays([1, 2, 3], ["a"])) // returns [[1, "a"]]
console.log(zipTwoArrays([], [1])) // returns []
console.log(zipTwoArrays([1], [])) // returns []
console.log(zipTwoArrays([true, false], [1, 0])) // returns [[true, 1], [false, 0]]
console.log(zipTwoArrays(["x", "y", "z"], [10, 20, 30])) // returns [["x", 10], ["y", 20], ["z", 30]]
