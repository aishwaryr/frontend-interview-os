function stringCompression() {}

console.log(stringCompression("aabcccccaaa")); // returns "a2b1c5a3"
console.log(stringCompression("abc")); // returns "abc"
console.log(stringCompression("aa")); // returns "aa"
console.log(stringCompression("")); // returns ""
console.log(stringCompression("aaaaa")); // returns "a5"
console.log(stringCompression("aabb")); // returns "aabb"
