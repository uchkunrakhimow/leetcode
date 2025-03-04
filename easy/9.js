/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  return String(x) === String(x).split("").reverse().join("");
};

// Test
console.log(isPalindrome(212)); // Output: true
