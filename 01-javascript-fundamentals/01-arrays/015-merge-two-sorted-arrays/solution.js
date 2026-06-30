function mergeTwoSortedArrays(a, b) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i += 1;
    } else {
      result.push(b[j]);
      j += 1;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i += 1;
  }

  while (j < b.length) {
    result.push(b[j]);
    j += 1;
  }

  return result;
}

module.exports = mergeTwoSortedArrays;
