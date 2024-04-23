function minCharsToAddForPalindrome(str) {
  function isPalindrome(s) {
      return s === s.split('').reverse().join('');
  }

  let charsToAdd = 0;
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
      if (str[i] !== str[j]) {
          // Characters don't match, add a character at the beginning
          charsToAdd++;
          i++;
      } else {
          // Characters match, move to the next pair
          i++;
          j--;
      }
  }

  // If the string is already a palindrome, charsToAdd will be 0
  return charsToAdd;
}

// Example usage:
console.log(minCharsToAddForPalindrome("abcda")); // Output: 3
console.log(minCharsToAddForPalindrome("aa"));   // Output: 0
