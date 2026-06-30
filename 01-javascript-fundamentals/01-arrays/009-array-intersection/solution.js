function arrayIntersection(a, b) {
  const valuesInB = new Set(b);
  const emitted = new Set();
  const result = [];

  for (const value of a) {
    if (valuesInB.has(value) && !emitted.has(value)) {
      emitted.add(value);
      result.push(value);
    }
  }

  return result;
}

module.exports = arrayIntersection;
