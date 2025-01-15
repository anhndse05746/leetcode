/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0; // Count of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Place the non-val element at index k
      k++; // Increment k for each element that is not val
    }
  }
  return k; // Return the count of elements not equal to val
};
