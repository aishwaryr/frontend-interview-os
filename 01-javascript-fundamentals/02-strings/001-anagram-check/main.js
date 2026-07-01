function anagramCheck() {}

console.log(anagramCheck("listen", "silent")); // returns true
console.log(anagramCheck("hello", "world")); // returns false
console.log(anagramCheck("Dormitory", "dirty room")); // returns true
console.log(anagramCheck("", "")); // returns true
console.log(anagramCheck("aabb", "abab")); // returns true
console.log(anagramCheck("aabb", "abac")); // returns false
