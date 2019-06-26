/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const list = {};
  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    if (list[char]) {
      list[char]++;
    } else {
      list[char] = 1;
    }
  }

  const listNote = {};
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (listNote[char]) {
      listNote[char]++;
    } else {
      listNote[char] = 1;
    }
  }

  const keys = Object.keys(listNote);
  for (let i = 0; i < keys.length; i++) {
    if (list[keys[i]] === undefined) {
      return false;
    }

    if (list[keys[i]] < listNote[keys[i]]) {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
console.log(canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh"));
