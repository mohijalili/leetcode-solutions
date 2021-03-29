function findMaxConsecutiveOnes(nums: number[]): number {
  let temp = 0;
  let maxConsecutive = 0;
  for (let index = 0; index < nums.length; index++) {
    nums[index] === 0 ? (temp = 0) : temp++;

    if (temp > maxConsecutive) {
      maxConsecutive = temp;
    }
  }
  return maxConsecutive;
};
