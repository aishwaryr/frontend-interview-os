function flattenNestedArray(array) {
  const result = [];
  const stack = [...array].reverse();

  while (stack.length > 0) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      for (let i = item.length - 1; i >= 0; i -= 1) {
        stack.push(item[i]);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = flattenNestedArray;
