function longestPalindromicPrefix(value) {
  for (let end = value.length; end >= 1; end -= 1) {
    if (isPalindrome(value, 0, end - 1)) {
      return value.slice(0, end);
    }
  }

  return "";
}

function isPalindrome(value, left, right) {
  while (left < right) {
    if (value[left] !== value[right]) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
}

module.exports = longestPalindromicPrefix;
