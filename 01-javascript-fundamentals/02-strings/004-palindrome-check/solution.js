function palindromeCheck(value) {
  const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = normalized.length - 1;

  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
}

module.exports = palindromeCheck;
