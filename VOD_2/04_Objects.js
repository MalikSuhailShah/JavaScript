// objects using Constructor

const tinderUser = new Object(); // creates the singleton empty object
// const tinde2= {}// non singleton empty object
tinderUser.id = "123abc";
tinderUser.name = "Sam ";
tinderUser.IsloggedIn = false;

// console.log(tinderUser)

// nesting in objects

const regUser = {
  email: "reg@google.com",
  fullname: {
    Userfullname: {
      firstName: "malik",
      LastName: "Suhail",
    },
  },
};

console.log(regUser.fullname.Userfullname.firstName); // using dot operator we can access nested object properties

// merging two or more diff object
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = {obj1, obj2}// object is stored in form objects only not in elemntal form
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2); // the empty parentheses creates the empty object and copies the obj1 AND obj2 to that empty object => syntax object.assign(target, source)

//spread operator
const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log(obj3);

// data from database

const user = [
  {
    id: "123abc",
    email: "m@google.com",
  },
  {
    id: "123abc",
    email: "m@google.com",
  },
  {
    id: "123abc",
    email: "m@google.com",
  },
  {
    id: "123abc",
    email: "m@google.com",
  },
];

// console.log(user[1].email) // method of access


console.log(tinderUser)
console.log(Object.keys(tinderUser)) // data types of these keys will be array
console.log(Object.values(tinderUser))//  data types of these values will also be array

console.log(Object.entries(tinderUser)) // gives array of key value pair

console.log(tinderUser.hasOwnProperty("IsloggedIn"))