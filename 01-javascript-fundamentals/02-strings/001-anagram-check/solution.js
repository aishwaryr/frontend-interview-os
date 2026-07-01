function anagramCheck(first, second) {
  const left = normalize(first);
  const right = normalize(second);

  if (left.length !== right.length) {
    return false;
  }

  const counts = new Map();

  for (const char of left) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  for (const char of right) {
    const count = counts.get(char);

    if (!count) {
      return false;
    }

    counts.set(char, count - 1);
  }

  return true;
}

function normalize(value) {
  return value.toLowerCase().replace(/\s+/g, "");
}

module.exports = anagramCheck;
