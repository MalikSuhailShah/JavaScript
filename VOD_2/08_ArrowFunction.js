const user = {
  username: "malikSUhail",
  price: 989,

  WelcomeMessage: function () {
    console.log(` welcome to website ${this.username}`); // this refers to the current context of the block
    console.log(this);
  },
};

// user.WelcomeMessage()

user.username = "Sammy Darren";
// user.WelcomeMessage()

console.log(this); // o/p => {}

function chai() {
  username: "malikAlam";
  console.log(this.username); //=> undefined, this key word only only works when fucntion is called as object method only
}
//chai()

const chia = function () {
  username: "malikAlam";
  console.log(this.username); //=> undefined
};
// chia();

//Arrow Function

const chia1 = () => {
  username: "malikAlam";
  //   console.log(this.username); //=> undefined
  console.log(this);
};

chia1;

const addTwo = (num1, num2) => {
  return num1 + num2;
};

//implicit return
const addTwo2 = (num1, num2) => num1 + num2;
const addTwo3 = (num1, num2) => num1 + num2; // no need of return statement when no curly braces are there

const addTwo4 = (num1,num2) => ({username:"malik"}) // for object parantheses should be used 
console.log(addTwo4(4, 15));
