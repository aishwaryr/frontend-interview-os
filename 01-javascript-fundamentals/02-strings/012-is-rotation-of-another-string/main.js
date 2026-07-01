function isRotationOfAnotherString() {}

console.log(isRotationOfAnotherString("waterbottle", "erbottlewat")); // returns true
console.log(isRotationOfAnotherString("hello", "llohe")); // returns true
console.log(isRotationOfAnotherString("hello", "olelh")); // returns false
console.log(isRotationOfAnotherString("", "")); // returns true
console.log(isRotationOfAnotherString("abc", "abc")); // returns true
console.log(isRotationOfAnotherString("abc", "ab")); // returns false
