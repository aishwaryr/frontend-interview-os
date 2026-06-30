function frequencyCounter(array) {
  const counts = new Map();

  for (const value of array) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return counts;
}

module.exports = frequencyCounter;
