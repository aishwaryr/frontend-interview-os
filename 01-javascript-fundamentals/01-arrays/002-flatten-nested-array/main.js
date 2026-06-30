// - flattenNestedArray([1, [2, 3], [[4]], 5]) returns [1, 2, 3, 4, 5]
// - flattenNestedArray([["a"], [], ["b", ["c"]]]) returns ["a", "b", "c"]
// - flattenNestedArray([]) returns []

function flattenNestedArray(array) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element)) {
      result.push(...flattenNestedArray(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(flattenNestedArray([1, [2, 3], [[4]], 5]));
console.log(flattenNestedArray([["a"], [], ["b", ["c"]]]));
console.log(flattenNestedArray([]));
