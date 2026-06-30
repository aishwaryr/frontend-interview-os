function makeArrayChunks(arr, chunkSize) {
  const result = [];
  for (let index = 0; index < arr.length; index += chunkSize) {
    result.push(arr.slice(index, index + chunkSize));
  }
  return result;
}

console.log(makeArrayChunks([1, 2, 3, 4, 5, 6, 7], 2));
console.log(makeArrayChunks([1, 2, 3, 4, 5, 6], 3));
console.log(makeArrayChunks([1, 2, 3, 4, 5, 6, 7], 10));
console.log(makeArrayChunks([1, 2, 3, 4, 5, 6, 7], 8));
console.log(makeArrayChunks([1, 2, 3, 4, 5, 6, 7], 6));
console.log(makeArrayChunks([1], 6));
console.log(makeArrayChunks([], 6));
