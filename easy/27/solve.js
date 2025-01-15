/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {};

const testCases = [
  {
    nums: [3, 2, 2, 3],
    val: 3,
    expected: [2, 2],
  },
  {
    nums: [0, 1, 2, 2, 3, 0, 4, 2],
    val: 2,
    expected: [0, 1, 4, 0, 3],
  },
  {
    nums: [1, 2, 3, 4, 5],
    val: 6,
    expected: [1, 2, 3, 4, 5],
  },
  {
    nums: [1, 1, 1, 1],
    val: 1,
    expected: [],
  },
  {
    nums: [],
    val: 0,
    expected: [],
  },
  {
    nums: [1, 2, 3, 4, 5],
    val: 1,
    expected: [2, 3, 4, 5],
  },
  {
    nums: [2, 2, 2, 2, 2],
    val: 2,
    expected: [],
  },
  {
    nums: [1, 2, 3, 4, 5, 1, 1],
    val: 1,
    expected: [2, 3, 4, 5],
  },
];

let passed = 0;
let failed = 0;

testCases.forEach(({ nums, val, expected }) => {
  const k = removeElement(nums, val);
  const result = nums.slice(0, k);
  const expectedResult = expected;

  if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
    passed++;
    // console.log(`Input: nums = ${JSON.stringify(nums)}, val = ${val}, Expected: ${expectedResult}, Result: ${result} - Passed`);
  } else {
    failed++;
    // console.log(`Input: nums = ${JSON.stringify(nums)}, val = ${val}, Expected: ${expectedResult}, Result: ${result} - Failed`);
  }
});

console.log(`Total Passed: ${passed}, Total Failed: ${failed}`);
