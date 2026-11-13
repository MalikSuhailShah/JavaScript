const user = {
  username: "Ritesh",
  password: "123",
  IsSigned: true,

  getUserDetail: function () {
    console.log("Got details from DB");
    console.log(`UserName:${this.username}`);
    console.log(this);
  },
}; // single object is called object literal

console.log(this); // in global context it gives empty object

// constructor function

const date = new Date(); // new = constructor funcn helps to create multiple instance from one object literal

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function (){
    console.log(`Welcome ${this.username}`)
  }

  return this; // passes the object (passes implicitly also without if even used )
}

/* 
const userOne = User("malik", 12, true)
const userTwo = User("chaiAurCode", 112, true)  // userTwo overwrites the value of userOne

console.log(userOne)

to avoid such overwrite we use new Keyword which create a new instance every time
*/
const userOne = new User("malik", 12, true);
const userTwo = new User("chaiAurCode", 112, true);
console.log(userOne)
console.log(userTwo)

console.log(userOne.constructor) // constuctor is referance about the object

/* when new keyword is Used , then

1) empty object created first
2) COnstructor function called due to new keyword
3) Argumrnts passed injects into this keyword
4) return all the values to us

*/ 