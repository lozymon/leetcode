// max number 2147483647
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  const string = String(num);

  if (parseInt(string) === 0) {
    return "Zero";
  }

  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const scales = ["", "Thousand", "Million", "Billion"];

  const chunks = string
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g);

  if (chunks.length > scales.length) return "";

  const words = [];
  for (let i = 0; i < chunks.length; i++) {
    if (parseInt(chunks[i])) {
      let ints = chunks[i].split("").map(parseFloat);
      if (ints[1] === 1) ints[0] += 10;
      if ((word = scales[i])) words.push(word);
      if ((word = units[ints[0]])) words.push(word);
      if ((word = tens[ints[1]])) words.push(word);
      if ((word = units[[ints[2]]])) words.push(word + " Hundred");
    }
  }

  return words.reverse().join(" ");
};

console.log(numberToWords(123) === "One Hundred Twenty Three");
console.log(numberToWords(12345) === "Twelve Thousand Three Hundred Forty Five");
console.log(numberToWords(1234567) === "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven");
console.log(numberToWords(1234567891) === "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One");

console.log(numberToWords(2147483647));

console.log(numberToWords(123123));
