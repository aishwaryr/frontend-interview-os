function partitionArray(array, predicate) {
  const pass = [];
  const fail = [];

  for (const item of array) {
    if (predicate(item)) {
      pass.push(item);
    } else {
      fail.push(item);
    }
  }

  return pass.concat(fail);
}

module.exports = partitionArray;
