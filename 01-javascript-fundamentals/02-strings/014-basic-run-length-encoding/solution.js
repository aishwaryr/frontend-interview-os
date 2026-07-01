function basicRunLengthEncoding(value) {
  if (value.length === 0) {
    return "";
  }

  const parts = [];
  let count = 1;

  for (let i = 1; i < value.length; i += 1) {
    if (value[i] === value[i - 1]) {
      count += 1;
    } else {
      parts.push(value[i - 1], String(count));
      count = 1;
    }
  }

  parts.push(value[value.length - 1], String(count));

  return parts.join("");
}

module.exports = basicRunLengthEncoding;
