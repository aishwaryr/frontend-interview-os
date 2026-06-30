function moveZeroes(nums) {
  let write = 0;

  for (let read = 0; read < nums.length; read += 1) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write += 1;
    }
  }

  while (write < nums.length) {
    nums[write] = 0;
    write += 1;
  }

  return nums;
}

module.exports = moveZeroes;
