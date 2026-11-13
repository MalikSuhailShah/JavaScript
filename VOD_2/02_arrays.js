const marvel_heros = ["spiderman", "Thor", "IronMan", "Hulk"];
const dc_heros = ["superman", "flash", "Batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[4][1] )// 4th element is itself an array

const All_heros = marvel_heros.concat(dc_heros); // we have to store the concatinated array in new array
// two arrays merge element wise complete array is not pushed

// console.log(All_heros) // same thing happens and actual array is not effected in concat method

const allNew_heros = [...marvel_heros, ...dc_heros]; // spread operator
// console.log(allNew_heros)

const anathor_array = [1, 2, 3, [7, 4, 1], 8, [2, 4, [3, 2]], 9];
const real_anathor_array = anathor_array.flat(Infinity); //flattens the array and  we have to pass the depth upto which we have to flatten the array
console.log(real_anathor_array);

console.log(Array.isArray("malik")); // checks whether object is array or not
console.log(Array.from("malik")); // converts the given object into an array

const s1 = 100;
const s2 = 200;
const s3 = 300;

console.log(Array.of(s1, s2, s3)); //Returns a new array from a set of elements
