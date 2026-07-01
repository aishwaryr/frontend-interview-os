function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word === "") {
        return "";
      }

      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

module.exports = capitalizeWords;
