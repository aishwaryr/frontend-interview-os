function frequencyCounter(values) {
  const counts = new Map();

  for (const val of values) {
    const count = counts.get(val) || 0;
    counts.set(val, count + 1);
  }

  return counts;
}

console.log(frequencyCounter(["a", "b", "a"])); // returns Map { "a" => 2, "b" => 1 }
console.log(frequencyCounter([1, 1, 2, 3, 2, 1])); // returns Map { 1 => 3, 2 => 2, 3 => 1 }
console.log(frequencyCounter([])); // returns Map {}
console.log(frequencyCounter([true, false, true])); // returns Map { true => 2, false => 1 }
console.log(frequencyCounter([NaN, NaN, 0])); // returns Map { NaN => 2, 0 => 1 }
console.log(frequencyCounter(["same", "same", "same"])); // returns Map { "same" => 3 }
