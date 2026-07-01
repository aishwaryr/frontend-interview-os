function characterFrequencyCount(value) {
  const counts = {};

  for (const char of value) {
    counts[char] = (counts[char] ?? 0) + 1;
  }

  return counts;
}

module.exports = characterFrequencyCount;
