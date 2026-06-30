function sortObjectsByFields(items, fields) {
  return [...items].sort((a, b) => {
    for (const { field, direction = 'asc' } of fields) {
      const multiplier = direction === 'desc' ? -1 : 1;
      const left = a[field];
      const right = b[field];

      if (left < right) return -1 * multiplier;
      if (left > right) return 1 * multiplier;
    }

    return 0;
  });
}

module.exports = sortObjectsByFields;
