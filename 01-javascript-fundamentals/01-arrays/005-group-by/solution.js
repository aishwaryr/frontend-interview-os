function groupBy(array, keySelector) {
  const getKey = typeof keySelector === 'function'
    ? keySelector
    : (item) => item[keySelector];

  const groups = Object.create(null);

  for (const item of array) {
    const key = getKey(item);

    if (!Object.hasOwn(groups, key)) {
      groups[key] = [];
    }

    groups[key].push(item);
  }

  return groups;
}

module.exports = groupBy;
