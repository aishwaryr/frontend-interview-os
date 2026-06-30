function sortObjectsByFields() {}

console.log(sortObjectsByFields([{ a: 1, b: 2 }, { a: 1, b: 1 }], [{ field: "a" }, { field: "b" }])) // returns [{ a: 1, b: 1 }, { a: 1, b: 2 }]
console.log(sortObjectsByFields([{ score: 9, name: "A" }, { score: 10, name: "B" }], [{ field: "score", direction: "desc" }])) // returns [{ score: 10, name: "B" }, { score: 9, name: "A" }]
console.log(sortObjectsByFields([], [{ field: "score" }])) // returns []
console.log(sortObjectsByFields([{ last: "B", first: "A" }, { last: "A", first: "Z" }, { last: "A", first: "B" }], [{ field: "last" }, { field: "first" }])) // returns [{ last: "A", first: "B" }, { last: "A", first: "Z" }, { last: "B", first: "A" }]
console.log(sortObjectsByFields([{ score: 10, time: 30 }, { score: 10, time: 20 }], [{ field: "score", direction: "desc" }, { field: "time" }])) // returns [{ score: 10, time: 20 }, { score: 10, time: 30 }]
console.log(sortObjectsByFields([{ rank: 1 }], [{ field: "rank" }])) // returns [{ rank: 1 }]
