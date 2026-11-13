// singleTon objects  => created using constructor method

// Object.create



 


// non singleton object created using object literals

const mySym = Symbol("key1")
const myObj = {
  name: "Malik",
  "full Name":"Malik Suhail Shah", // this can never be accessed using dot operator
//   mySym:"myKey1", // this way mySym is used as string
  [mySym] : "myKey1" ,// in this it is used as Symbol 
  age: 22,
  Marks: 7.8,
};

console.log(myObj.name);

console.log(myObj["full Name"])
console.log(myObj[mySym])
console.log(typeof myObj[mySym])


//modification of value
myObj.name="Malik SHah"
console.log(myObj.name)

// to avoid modification we have to freeze the value
// Object.freeze(myObj)
myObj.name="Malik Alam SHah" // value not modified
console.log(myObj)

myObj.greeting = function(){
    console.log("Hello Malik Shah")
}
console.log(myObj.greeting())

//console.log(myObj.greeting) // returns anonymous function
myObj.greetingTwo = function(){
    console.log(`Hello User ${this["full Name"]}`) //giving  reference to the object parameter
}

console.log(myObj.greetingTwo())
