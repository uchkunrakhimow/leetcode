/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char in map) {
      let topElement = stack.pop() || "#";
      if (topElement !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

// Test
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("{[}")); // false
