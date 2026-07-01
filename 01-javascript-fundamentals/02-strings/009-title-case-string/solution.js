const MINOR_WORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "but",
  "or",
  "for",
  "nor",
  "on",
  "at",
  "to",
  "from",
  "by",
  "of",
  "in",
]);

function titleCaseString(title) {
  const trimmed = title.trim();

  if (trimmed === "") {
    return "";
  }

  const words = trimmed.toLowerCase().split(/\s+/);

  return words
    .map((word, index) => {
      const isFirst = index === 0;
      const isLast = index === words.length - 1;

      if (isFirst || isLast || !MINOR_WORDS.has(word)) {
        return capitalize(word);
      }

      return word;
    })
    .join(" ");
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

module.exports = titleCaseString;
