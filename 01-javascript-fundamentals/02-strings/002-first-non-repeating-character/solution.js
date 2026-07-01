function firstNonRepeatingCharacter(value) {
  const counts = new Map();

  for (const char of value) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  for (const char of value) {
    if (counts.get(char) === 1) {
      return char;
    }
  }

  return null;
}

module.exports = firstNonRepeatingCharacter;
