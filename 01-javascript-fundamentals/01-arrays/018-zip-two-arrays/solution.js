function zipTwoArrays(a, b) {
  const length = Math.min(a.length, b.length);
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push([a[i], b[i]]);
  }

  return result;
}

module.exports = zipTwoArrays;
