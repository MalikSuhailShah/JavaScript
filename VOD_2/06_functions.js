function sayMyName() {
  console.log("M");
  console.log("A");
  console.log("L");
  console.log("I");
  console.log("K");
}

/* sayMyName => referance of funtion

 sayMyName() //=> execution of function

 function Add(number1, number2) { // this function do not returning any value
   console.log(number1 + number2);
 }
*/
function Add(number1, number2) {
  //   console.log("Malik")
  const res = number1 + number2;
  return res; // function do not return statements below return statement
  console.log("shah"); // this statement will never run
}

Add(2, 5); //=> 7
Add(2, "5"); // =>25
Add(2, "a"); // => 2a

const result = Add(2, 5);
console.log("Result:", result); // => Result: undefined until function returns something

function loginUserMessage(userName) {
  return `${userName} just logged In!!`;
}

console.log( loginUserMessage("Malik") ); // o/p => Malik just logged In!!
console.log( loginUserMessage("") ); // o/p => just logged In!!
console.log( loginUserMessage() ); // o/p => undefined just logged In!!

function loginUserMessageUp(userName)/*we can also give default value to the paramerter*/ {
  if (!userName) {
    console.log("Please enter the userName!!");
    return;
  }
  return `${userName} just logged In!!`;
}
console.log( loginUserMessageUp() ); // null, undefined value gives false in boolean


function calculateCartPrice( ...num1){ // ... => rest or spread operator due to which it can tackle any number of arguments passed
      return num1
}

console.log(calculateCartPrice(299,39,4999,489)) // puts all argunments in array

//passing object to function
 const user={
  userName:"malikShah",
  price:199
 }

 function handleObject(anyObject){
        console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)
 }

 handleObject(user);

 //direct object passing

 handleObject({
  userName:"Shami",
  price:899
 })


 //passing array to function

 const myNewArray = [2,3,4,56,7,8,8]

 function handleArray( myarr){
  console.log(`first element of the array is ${myarr[0]} and last element of the array is ${myarr[myarr.length -1]}`)
 }
handleArray(myNewArray)