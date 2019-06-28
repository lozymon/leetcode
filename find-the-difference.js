/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let diff = t;
  for (let i = 0; i < s.length; i++) {
    diff = diff.replace(s[i], "");
  }
  return diff;
};

console.log(findTheDifference("a", "aa"), "e");
console.log(findTheDifference("abcd", "abxcd"), "x");
