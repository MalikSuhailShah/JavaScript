const score = 400; // automatically defines a number
console.log(score);

const balance = new Number(100); // explicitly defines the number contains more method
console.log(balance);
console.log(balance.toString()); // convert number into string

console.group(balance.toFixed(3)); /// sets number of precision values or defines the number of decimal places

const otherNum = 1234.0987;
console.log(otherNum.toPrecision(6)); // it round offd the number upto the given number of decimal places

const hundereds = 10000000;

console.log(hundereds.toLocaleString()); // puts commas accorfing the different standards  like us, or indian  by default it is us standard

// ++++++++++++  Maths  +++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); // displays the absolute value
console.log(Math.round(4.5)); // rounds off the decimal value to int

console.log(Math.ceil(4.2)); // round offf the greatest int  value
console.log(Math.floor(4.9)); /// round offs to the lowest integer value

console.log(Math.min(2, 4, 56, 9, 7, 8)); // take min value from the array

console.log(Math.max(2, 4, 56, 9, 7, 8)); // take max value from the array

console.log(Math.random()); // displays random value in range of [0,1]
console.log(Math.random() * 10 + 1); // way to increase the range and ,displays random value in range of [1,11], avoid getting 0

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // makes range [min , max]
