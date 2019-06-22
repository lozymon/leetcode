/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  if (s.trim() === "") {
    return false;
  }
  return !isNaN(Number(s));
};

console.log(isNumber(" "), false);
console.log(isNumber("0"), true);
console.log(isNumber(" 0.1 "), true);
console.log(isNumber("abc"), false);
console.log(isNumber("1 a"), false);
console.log(isNumber("2e10"), true);
console.log(isNumber(" -90e3   "), true);
console.log(isNumber(" 1e"), false);
console.log(isNumber("e3"), false);
console.log(isNumber(" 6e-1"), true);
console.log(isNumber(" 99e2.5 "), false);
console.log(isNumber("53.5e93"), true);
console.log(isNumber(" --6 "), false);
console.log(isNumber("-+3"), false);
console.log(isNumber("95a54e53"), false);
