/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let output = "";
  for (let roman in romanMap) {
    while (num >= romanMap[roman]) {
      output += roman;
      num -= romanMap[roman];
    }
  }

  return output;
};

console.log(intToRoman("3"));
console.log(intToRoman("4"));
console.log(intToRoman("9"));
console.log(intToRoman("58"));
console.log(intToRoman("1994"));
