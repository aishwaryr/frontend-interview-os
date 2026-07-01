function sortObjectsByField(items, field, direction = "asc") {
  const multiplier = direction === "desc" ? -1 : 1;

  return [...items].sort((a, b) => {
    const left = a[field];
    const right = b[field];

    if (left < right) return -1 * multiplier;
    if (left > right) return 1 * multiplier;
    return 0;
  });
}

console.log(sortObjectsByField([{ age: 30 }, { age: 20 }], "age")); // returns [{ age: 20 }, { age: 30 }]
console.log(sortObjectsByField([{ name: "B" }, { name: "A" }], "name", "desc")); // returns [{ name: "B" }, { name: "A" }]
console.log(sortObjectsByField([], "age")); // returns []
console.log(
  sortObjectsByField([{ score: 10 }, { score: 10 }, { score: 5 }], "score"),
); // returns [{ score: 5 }, { score: 10 }, { score: 10 }]
console.log(
  sortObjectsByField(
    [{ price: 3 }, { price: 1 }, { price: 2 }],
    "price",
    "desc",
  ),
); // returns [{ price: 3 }, { price: 2 }, { price: 1 }]
console.log(sortObjectsByField([{ name: "Ada" }], "name")); // returns [{ name: "Ada" }]
