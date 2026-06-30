function groupBy() {}

console.log(groupBy([{ type: "a" }, { type: "b" }, { type: "a" }], "type")) // returns { a: [{ type: "a" }, { type: "a" }], b: [{ type: "b" }] }
console.log(groupBy([1, 2, 3, 4], n => n % 2 === 0 ? "even" : "odd")) // returns { odd: [1, 3], even: [2, 4] }
console.log(groupBy([], "type")) // returns {}
console.log(groupBy(["apple", "apricot", "banana"], word => word[0])) // returns { a: ["apple", "apricot"], b: ["banana"] }
console.log(groupBy([{ role: "admin" }, { role: "user" }, { role: "admin" }], "role")) // returns { admin: [{ role: "admin" }, { role: "admin" }], user: [{ role: "user" }] }
console.log(groupBy([0, 1, 2, 3], n => n > 1 ? "large" : "small")) // returns { small: [0, 1], large: [2, 3] }
