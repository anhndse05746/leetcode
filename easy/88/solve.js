/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {};

const testCases = [
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [2, 5, 6],
    n: 3,
    expected: [1, 2, 2, 3, 5, 6],
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    expected: [1],
  },
  {
    nums1: [0],
    m: 0,
    nums2: [1],
    n: 1,
    expected: [1],
  },
  {
    nums1: [1, 3, 5, 0, 0, 0],
    m: 3,
    nums2: [2, 4, 6],
    n: 3,
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    nums1: [0, 0, 0, 0, 0],
    m: 0,
    nums2: [1, 2, 3, 4, 5],
    n: 5,
    expected: [1, 2, 3, 4, 5],
  },
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [0, 0, 0],
    n: 3,
    expected: [0, 0, 0, 1, 2, 3],
  },
  {
    nums1: [1, 2, 3, 4, 0, 0],
    m: 4,
    nums2: [5, 6],
    n: 2,
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    nums1: [2, 0],
    m: 1,
    nums2: [1],
    n: 1,
    expected: [1, 2],
  },
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [3, 4, 5],
    n: 3,
    expected: [1, 2, 3, 3, 4, 5],
  },
  {
    nums1: [5, 6, 7, 0, 0, 0],
    m: 3,
    nums2: [1, 2, 3],
    n: 3,
    expected: [1, 2, 3, 5, 6, 7],
  },
];

let passed = 0;
let failed = 0;

testCases.forEach(({ nums1, m, nums2, n, expected }) => {
  merge(nums1, m, nums2, n);
  const result = JSON.stringify(nums1);
  const expectedResult = JSON.stringify(expected);

  if (result === expectedResult) {
    passed++;
    // console.log(
    //   `Input: nums1 = ${JSON.stringify(nums1)}, nums2 = ${JSON.stringify(
    //     nums2,
    //   )}, Expected: ${expectedResult}, Result: ${result} - Passed`,
    // );
  } else {
    failed++;
    // console.log(
    //   `Input: nums1 = ${JSON.stringify(nums1)}, nums2 = ${JSON.stringify(
    //     nums2,
    //   )}, Expected: ${expectedResult}, Result: ${result} - Failed`,
    // );
  }
});

console.log(`Total Passed: ${passed}, Total Failed: ${failed}`);
