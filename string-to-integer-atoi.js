/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let number = "";
  const arr = str.trim().split("");
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (
      n === "-" ||
      n === "+" ||
      n === "1" ||
      n === "2" ||
      n === "3" ||
      n === "4" ||
      n === "5" ||
      n === "6" ||
      n === "7" ||
      n === "8" ||
      n === "9" ||
      n === "0"
    ) {
      if (number.length > 0 && (n === "-" || n === "+")) {
        break;
      }
      number += n;
    } else {
      break;
    }
  }

  if (number === "-" || number === "+" || number.substring(0, 2) === "+-" || number.substring(0, 2) === "-+" || number === "") {
    return 0;
  } else if (Number(number) >= 2147483648) {
    return Number(2147483647);
  } else if (number <= 2147483648 && number >= -2147483648) {
    return Number(number);
  } else {
    return number > 0 ? 2147483648 : -2147483648;
  }
};

console.log(myAtoi("42"), 42);
console.log(myAtoi("   -42"), -42);
console.log(myAtoi("4193 with words"), 4193);
console.log(myAtoi("words and 987"), 0);
console.log(myAtoi("21474836482"), 2147483648);
console.log(myAtoi("-91283472332"), 2147483648);
console.log(myAtoi("-"), 0);
console.log(myAtoi("+1"), 1);
console.log(myAtoi("+-1"), 0);
console.log(myAtoi("2147483648"), 2147483647);
console.log(myAtoi("0-1"), 0);
