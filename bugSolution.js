function foo(a, b) {
  // Type checking before operation
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Invalid input types. Both parameters must be numbers.";
  }  
  return a + b;
}

console.log(foo(1, "1")); // Output: Error: Invalid input types. Both parameters must be numbers.
console.log(foo(1, 1)); // Output: 2