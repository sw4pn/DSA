/**
 * Map
 * - Ordered
 * - Key-value pairs (keys can be of any type)
 * - Duplicate values
 */

const map = new Map(["foo", "Foo"], ["bar", "Bar"]);

// size
map.size; // 2

// Access
map.has("foo"); // true
map.get("bar"); // "Bar"

// Iteration
map.keys(); // ["foo", "bar"]
map.values(); // ["Foo", "Bar"]
map.entries(); // [["foo", "Foo"], ["bar", "Bar"]]
map.forEach((value, key) => console.log(key, value));
for (const [key, value] of map) {
  console.log(key, value);
}

// Mutation
map.set("baz", "Baz"); // add
map.delete("baz"); // remove
map.clear(); // remove all

// Conversion
new Map(); // 2d array -> Map
Array.from(map); // Map -> 2d array
new Map(Object.entries(address)); // Object -> Map
Object.fromEntries(map); // Map -> Object
