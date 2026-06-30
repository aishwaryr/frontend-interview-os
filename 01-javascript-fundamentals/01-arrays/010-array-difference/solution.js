function arrayDifference(a, b) {
  const excluded = new Set(b);
  const emitted = new Set();
  const result = [];

  for (const value of a) {
    if (!excluded.has(value) && !emitted.has(value)) {
      emitted.add(value);
      result.push(value);
    }
  }

  return result;
}

module.exports = arrayDifference;
