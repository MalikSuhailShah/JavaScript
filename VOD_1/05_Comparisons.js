// console.log(2>=1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

// comparison between two different data types

// console.log("2">1)
// console.log("02">1) // javascript automatically string to number and then performed comparison

// NULL Comparison (this type of conversion gives unexpexcted result so avoid)

// eqaulity check and comparison operator work differently

// console.log(null<0)
// console.log(null==0)// equality doesn't convert the null to zero thats why generate result different from comparison operator
// console.log(null<=0) // comparison convert null to 0 treating it as a zero generate results based on it

// Undefined comparison (gives false in all the results)  (this type of conversion gives unexpexcted result so avoid)
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

// === comparison (Compare data types along with the values)
console.log("2" === 2); // => gives the false  as data type is different
