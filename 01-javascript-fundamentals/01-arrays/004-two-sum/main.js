function twoSum(arr, sum) {
  const map = new Map();
  for (const [index, num] of arr.entries()) {
    let complement = sum - num;
    if (map.has(complement)) {
      return [map.get(complement), index];
    } else {
      map.set(num, index);
    }
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9)); // returns [0, 1]
console.log(twoSum([3, 2, 4], 6)); // returns [1, 2]
console.log(twoSum([1, 2, 3], 10)); // returns null
console.log(twoSum([3, 3], 6)); // returns [0, 1]
console.log(twoSum([-3, 4, 3, 90], 0)); // returns [0, 2]
console.log(twoSum([], 5)); // returns null
