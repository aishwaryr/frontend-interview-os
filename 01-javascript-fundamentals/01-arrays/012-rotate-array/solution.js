function rotateArray(nums, k) {
  const n = nums.length;

  if (n === 0) {
    return nums;
  }

  const steps = k % n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, steps - 1);
  reverse(nums, steps, n - 1);

  return nums;
}

function reverse(array, left, right) {
  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left += 1;
    right -= 1;
  }
}

module.exports = rotateArray;
