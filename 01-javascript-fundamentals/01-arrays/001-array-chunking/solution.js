function chunkArray(array, size) {
  const chunks = [];

  for (let start = 0; start < array.length; start += size) {
    chunks.push(array.slice(start, start + size));
  }

  return chunks;
}

module.exports = chunkArray;
