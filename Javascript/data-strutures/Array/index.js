/**
 *  Array
 * - Ordered
 * - Indexed
 * - Duplicate values
 * - Mutable
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// size
arr.length; // 10

// Access
arr[1]; // 2

// Iteration
arr.forEach((item) => console.log(item));

arr.map((item) => item * 2);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Mutation
arr[1] = 20; // update any index
arr.unshift(); // add at the beginning
arr.shift(); // remove from the beginning
arr.push(); // add at the end
arr.pop(); // remove from the end

// Conversion
const obj = { 0: "a", 1: "b", 2: "c", length: 3 };
Object.values(obj); // ["a", "b", "c"]
Object.entries(obj); // [["0", "a"], ["1", "b"], ["2", "c"]]
