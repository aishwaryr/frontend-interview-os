function cartesianProduct() {}

console.log(cartesianProduct([[1, 2], ["a", "b"]])) // returns [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]
console.log(cartesianProduct([[1], [2], [3]])) // returns [[1, 2, 3]]
console.log(cartesianProduct([])) // returns [[]]
console.log(cartesianProduct([[1, 2], []])) // returns []
console.log(cartesianProduct([["red"], ["S", "M"]])) // returns [["red", "S"], ["red", "M"]]
console.log(cartesianProduct([[true, false]])) // returns [[true], [false]]
