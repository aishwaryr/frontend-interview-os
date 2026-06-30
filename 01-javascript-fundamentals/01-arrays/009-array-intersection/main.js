function arrayIntersection() {}

console.log(arrayIntersection([1, 2, 2, 3], [2, 3, 4])) // returns [2, 3]
console.log(arrayIntersection(["b", "a", "b"], ["a", "b"])) // returns ["b", "a"]
console.log(arrayIntersection([], [1])) // returns []
console.log(arrayIntersection([1, 2, 3], [])) // returns []
console.log(arrayIntersection([1, 1, 1], [1])) // returns [1]
console.log(arrayIntersection([false, true, false], [false])) // returns [false]
