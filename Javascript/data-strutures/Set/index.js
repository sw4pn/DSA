/**
 * Set
 * - Ordered
 * - No duplicates
 */

const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// size
set.size; // 10

// Access
set.has(3); // true

// Iteration
set.forEach((item) => console.log(item));
for (const item of set) {
  console.log(item);
}

// Mutation
set.add(11); // add
set.add(11); // no duplicates
set.delete(11); // remove
set.clear(); // remove all

// Conversion
new Set([1, 2, 4]);
const arr = ["a", "b", "c"];
const newSet = new Set(arr);
Array.from(newSet); // ["a", "b", "c"]
[...set]; // ["a", "b", "c"]

// examples
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperSet(setA, setB); // true
union(setA, setC); // Set(6) { 1, 2, 3, 4, 5, 6 }
intersection(setA, setC); // Set(2) { 3, 4 }
difference(setA, setC); // Set(2) { 1, 2 }
