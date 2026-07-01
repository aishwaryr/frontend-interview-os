function longestWord(sentence) {
  let longest = "";

  for (const token of sentence.split(/\s+/)) {
    const word = token.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");

    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

module.exports = longestWord;
