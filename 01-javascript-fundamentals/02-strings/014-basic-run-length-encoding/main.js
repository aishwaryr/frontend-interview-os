function basicRunLengthEncoding() {}

console.log(basicRunLengthEncoding("aaabbc")); // returns "a3b2c1"
console.log(basicRunLengthEncoding("abcd")); // returns "a1b1c1d1"
console.log(basicRunLengthEncoding("")); // returns ""
console.log(basicRunLengthEncoding("aaaa")); // returns "a4"
console.log(basicRunLengthEncoding("aA")); // returns "a1A1"
console.log(basicRunLengthEncoding("abbcccdddd")); // returns "a1b2c3d4"
