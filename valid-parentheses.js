/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const chars = s.split("");

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      const stackChar = stack.pop();
      const closingChar = [["(", ")"], ["[", "]"], ["{", "}"]].find(x => x[0] === stackChar);
      if (closingChar === undefined || closingChar[1] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid(")"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("(((){}()){}[((()))])"));
