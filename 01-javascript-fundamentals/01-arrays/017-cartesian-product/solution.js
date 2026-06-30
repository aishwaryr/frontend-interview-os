function cartesianProduct(arrays) {
  let result = [[]];

  for (const options of arrays) {
    const next = [];

    for (const combination of result) {
      for (const option of options) {
        next.push([...combination, option]);
      }
    }

    result = next;
  }

  return result;
}

module.exports = cartesianProduct;
