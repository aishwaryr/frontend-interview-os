function removeDuplicates(array) {
  const seen = new Set();
  const result = [];

  for (const value of array) {
    if (!seen.has(value)) {
      seen.add(value);
      result.push(value);
    }
  }

  return result;
}

module.exports = removeDuplicates;
