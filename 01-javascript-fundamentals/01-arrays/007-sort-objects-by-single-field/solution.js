function sortObjectsByField(items, field, direction = 'asc') {
  const multiplier = direction === 'desc' ? -1 : 1;

  return [...items].sort((a, b) => {
    const left = a[field];
    const right = b[field];

    if (left < right) return -1 * multiplier;
    if (left > right) return 1 * multiplier;
    return 0;
  });
}

module.exports = sortObjectsByField;
