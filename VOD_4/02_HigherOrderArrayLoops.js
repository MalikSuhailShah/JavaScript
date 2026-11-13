// for of loop

// [{}.{},{}] => array of objects

// this loop can iterate over array

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (const element of arr) {
  // console.log(element)
}

// this loop can iterate over string

const str = "MalikShah";
for (const ch of str) {
  // console.log(ch)
}

// Map
/* Map contains the key value pair with their order of insertion and only contain unique element with no duplicacy */
// this loop can iterate over maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");

// console.log(map)

for (const key of map) {
  // print the complete map
  console.log(key);
}

for (const [key, value] of map) {
  console.log(key, ":-", value); // calue andm key can prnited seperately
}

//objects =>this loop is not iteratble over objects 
const myObj = {
  UserName: "Malik SHah",
  city: "Lucknow",
};


for(const [key , value] of myObj){
    console.log(key, ":-", value)
}

