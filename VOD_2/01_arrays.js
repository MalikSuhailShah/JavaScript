// arrays

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[4])
console.log(myArr.length)

/*
1. collection of objects or elements
2. In js array are resizeable
3. In same array You can store different data types
4. 0 based indexing

*/

console.log(myArr)
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr)

myArr.unshift(0) // adds element in the beginning of the array
myArr.shift() // deletes element from the beginning of the array
console.log(myArr)


const newArr = myArr.join(); // converts the array into string and join the elements of the array

console.log( newArr)
console.log(typeof newArr)

// slice and splice

console.log("A " ,myArr)

const myNewArr = myArr.slice(1,3) // last index not included
console.log("B " ,myArr)
console.log(myNewArr)

const myNew2 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myNew2)