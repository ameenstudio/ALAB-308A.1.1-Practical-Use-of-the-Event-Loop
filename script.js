// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 1000);
// console.log("third");
//========================================== part one
// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

let counter = 0;

function recursiveFunction() {
  counter++;
  recursiveFunction(); 
}

try {
  recursiveFunction();
} catch (error) {
  console.log('Stack overflow error:', error.message);
  console.log('Maximum stack size:', counter);
}

//==============================================part two
// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.
function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item)); // Recursive case: spread the result into the array
    } else {
      result.push(item); // Base case: add non-array element
    }
  }
  return result;
}
// not entirely sure where im headed with with this //


