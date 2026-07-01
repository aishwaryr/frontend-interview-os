function characterFrequencyCount() {}

console.log(characterFrequencyCount("hello")); // returns { h: 1, e: 1, l: 2, o: 1 }
console.log(characterFrequencyCount("aabbb")); // returns { a: 2, b: 3 }
console.log(characterFrequencyCount("")); // returns {}
console.log(characterFrequencyCount("Aa")); // returns { A: 1, a: 1 }
console.log(characterFrequencyCount("   ")); // returns { " ": 3 }
console.log(characterFrequencyCount("mississippi")); // returns { m: 1, i: 4, s: 4, p: 2 }
