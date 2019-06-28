/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const charCount = s.split("").reduce((obj, element, index) => {
    if (obj[element]) {
      obj[element].count++;
    } else {
      obj[element] = {
        count: 1,
        index
      };
    }
    return obj;
  }, {});

  const keys = Object.keys(charCount);
  for (let i = 0; i < keys.length; i++) {
    const item = charCount[keys[i]];
    if (item.count === 1) {
      return item.index;
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode"), 0);
console.log(firstUniqChar("loveleetcode"), 2);
console.log(firstUniqChar("dddccdbba"), 8);
