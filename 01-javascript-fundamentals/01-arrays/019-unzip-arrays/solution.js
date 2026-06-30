function unzipArrays(pairs) {
  const firstValues = [];
  const secondValues = [];

  for (const [first, second] of pairs) {
    firstValues.push(first);
    secondValues.push(second);
  }

  return [firstValues, secondValues];
}

module.exports = unzipArrays;
