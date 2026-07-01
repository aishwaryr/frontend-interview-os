function reverseWordsInSentence(sentence) {
  const trimmed = sentence.trim();

  if (trimmed === "") {
    return "";
  }

  return trimmed.split(/\s+/).reverse().join(" ");
}

module.exports = reverseWordsInSentence;
