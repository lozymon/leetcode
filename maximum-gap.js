/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  const arr = nums
    .map(x => Number(x))
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

  let diff = 0;

  for (var i = 1; i < arr.length; i++) {
    const sum = arr[i] - arr[i - 1];

    if (sum > 0 && sum > diff) {
      diff = sum;
    }
  }

  return diff;
};

console.log(maximumGap([3, 6, 9, 1]));
console.log(maximumGap([10]));
console.log(maximumGap([1, 3, 100]));
console.log(
  maximumGap([
    15252,
    16764,
    27963,
    7817,
    26155,
    20757,
    3478,
    22602,
    20404,
    6739,
    16790,
    10588,
    16521,
    6644,
    20880,
    15632,
    27078,
    25463,
    20124,
    15728,
    30042,
    16604,
    17223,
    4388,
    23646,
    32683,
    23688,
    12439,
    30630,
    3895,
    7926,
    22101,
    32406,
    21540,
    31799,
    3768,
    26679,
    21799,
    23740
  ])
);
