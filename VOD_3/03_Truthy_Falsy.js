const str = "canBeany";

if (str)
  console.log("Executed"); // for any npn empty string conditional statement works
else console.log("Not Executed");

const userEmail = [];

if (userEmail.length === 0) console.log("Array is Empty!!");

const myEmptyObj = {};

if (Object.keys(myEmptyObj).length === 0) console.log("Object is Empty!!");

// falsy values => false, 0, -0, "", BigInt n0, null, undefined, NaN
// truthy values => "0", " ",n"false", [], {}, empty function

// Nullish coalescing operator (??): null undefined  
// syntax => const result = value ?? defaultValue;  => Use value, unless it is null or undefined; then use defaultValue

let val1;
val1 = null ?? 10; // => 10 default value
val2 = undefined ?? 10;// => 10 default value
val3 = 5 ?? 10;// => 5 not default value
val4 = null ?? 10 ?? 20;// => 10 first default(not null or undefined) value
console.log(val1, val2, val3, val4)

//Ternary Operator

// syntax => condition ? true : false

const price = 10

price>10 ? console.log("More than 10") : console.log("Less than or equal to  10")