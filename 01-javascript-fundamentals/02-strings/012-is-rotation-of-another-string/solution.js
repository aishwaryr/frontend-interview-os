function isRotationOfAnotherString(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  return (first + first).includes(second);
}

module.exports = isRotationOfAnotherString;
