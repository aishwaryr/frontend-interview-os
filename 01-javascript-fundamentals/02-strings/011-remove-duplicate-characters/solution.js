function removeDuplicateCharacters(value) {
  const seen = new Set();
  const result = [];

  for (const char of value) {
    if (!seen.has(char)) {
      seen.add(char);
      result.push(char);
    }
  }

  return result.join("");
}

module.exports = removeDuplicateCharacters;
