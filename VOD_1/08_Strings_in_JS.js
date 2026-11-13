 const name ="malik "
 const repoCount=50

 console.log(name + "suhail" + repoCount)

 // use of backticks

 console.log(`hello my name is ${name } Suhail`)

 // string declaration

 const gameName  =  new String("BattleGround- FreeFire") // type is object

 console.log(gameName[0]) 
 console.log(gameName.__proto__) 

 console.log(gameName.length) // prints the length of the string

 console.log(gameName.toUpperCase()) // converts the whole string into capital letter or upper case

 console.log(gameName.charAt(4)) // gives char at particular index

 console.log(gameName.indexOf('l')) // gives index of the particular Char

 const newString =gameName.substring(0,4) // create a substring in which last index is not included do not support negative index value
console.log(newString)


const anathorString = gameName.slice(-10,4) /// we can also give negative value 
console.log(anathorString)


const newStringOne = " Suhail "
console.log(newStringOne)
console.log(newStringOne.trim()) // remove extra spaces 

const url ="https://malikshah.com/%20malik shah"

console.log(url)

console.log(url.replace('%20', '-'))

console.log(url.includes('malik')) // cheks whether malik is included in url


console.log(gameName.split('-')) // splits the string based on the given char and store it in array of strings