/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let maxLength = 0;
  let stack = [-1];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      stack.push(i);
    } else {
      const n = stack.pop();
      n;
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
  }
  return maxLength;
};

console.log(longestValidParentheses("()"));
console.log(longestValidParentheses("(((((((((())(())(())))))))))))(())(())(())(())(())(())(())(())(())(())(())(("));
