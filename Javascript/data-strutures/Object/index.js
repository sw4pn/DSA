/**
 * Object
 * - Unordered
 * - Key-Value pairs
 * - No duplicate keys
 * - Mutable
 */

const obj = { user: "foo", email: "foo@example.org" };

// size
Object.getOwnPropertyNames(obj).length; // 2

// Access
obj.user; // "foo"
obj["email"]; // "foo@example.org"

// Iteration
obj.keys(); // ["user", "email"]
obj.values(); // ["foo", "foo@example.org"]
Object.entries(obj); // [["user", "foo"], ["email",..],..]
for (const [key, value] of obj.entries()) {
  key; //=> 'user'
  value; //=> 'foo'
}

// Mutation
obj.user = "bar"; // update any key
delete obj.email; // remove any key

// Conversion
const arr = ["a", "b", "c"];
Object.fromEntries(arr); // { 0: "a", 1: "b", 2: "c" }
