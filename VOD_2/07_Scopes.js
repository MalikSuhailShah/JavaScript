let a = 300;
const b = 100;

/* every curly braces has scope associated with it */

if (true) {
  let a = 10; // value of a will be 10 only in this block of curly braces
  const b = 20; // value of b will be 20 only in this block of curly braces

  var c = 30;

  console.log("Inner", a, b);
}

console.log(a, b); //=> 200, 100

//funtion scope

function one() {
  const userName = "malikShah";
  function two() {
    const website = "google";

    console.log(userName); // userName can be accessed here
  }
  two();
  // console.log(website) //website do not exist here
}

one();

if (true) {
  const userName = "MalikSUHail";
  if (true) {
    const background = "engineering";
    console.log(userName);
  }
  // console.log(background)
}


console.log(addone(5)) // function called earlier than declration

function addone(value) {
  return value + 1;
}


// console.log(addTwo(5)) => this cant be called earlier than declaration

const addTwo = function (value){
    return value+2
}

console.log(addTwo(17))
