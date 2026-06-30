// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

function removeDuplicates(arr) {
  const result = [];
  for (const i of arr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 1, 3, 2])); // returns [1, 2, 3]
console.log(removeDuplicates(["a", "a", "b"])); // returns ["a", "b"]
console.log(removeDuplicates([])); // returns []
console.log(removeDuplicates([1, 1, 1, -1])); // returns [1]
console.log(removeDuplicates([true, false, true])); // returns [true, false]
console.log(removeDuplicates([0, -0, NaN, NaN])); // returns [0, NaN]
