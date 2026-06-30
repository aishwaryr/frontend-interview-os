function flattenArrayToDepth(array, depth) {
  const result = [];

  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flattenArrayToDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = flattenArrayToDepth;
