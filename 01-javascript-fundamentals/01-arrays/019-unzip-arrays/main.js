function unzipArrays() {}

console.log(unzipArrays([[1, "a"], [2, "b"]])) // returns [[1, 2], ["a", "b"]]
console.log(unzipArrays([])) // returns [[], []]
console.log(unzipArrays([[true, 1]])) // returns [[true], [1]]
console.log(unzipArrays([["x", 10], ["y", 20], ["z", 30]])) // returns [["x", "y", "z"], [10, 20, 30]]
console.log(unzipArrays([[null, undefined]])) // returns [[null], [undefined]]
console.log(unzipArrays([[-1, "neg"], [0, "zero"]])) // returns [[-1, 0], ["neg", "zero"]]
