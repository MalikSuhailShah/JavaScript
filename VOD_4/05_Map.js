const myNum = [1,2,3,4,5,6,7,8,9,10]

const myNums = myNum.map((num) => { return num+10})

console.log(myNums)

// chaining (using multiple methods at one time)

const myNums1 = myNum.map((num) => num*10). map((num) => num+1).filter((num) => num>40) // arguments updated first method will pass to the second method

console.log(myNums1)