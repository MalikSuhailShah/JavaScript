//For In Loops

// for in lop is iteratable over objects
const myObj = {
  js: "JavaScript",
  cpp: "C++",
  swift: "swift",
  py: "Python",
  rb: "ruby",
};

for (const key in myObj) {
  // console.log(`${key} is shortcut for ${myObj[key]}`)
}

// for in loop on array is iteratable

const myArr = ["js", "py", "cpp", "java"];

for (const val in myArr) {
  // this loop takes the indexkey of the array and value of array elements  can be extracted using the index keys
  // console.log(val , ":-", myArr[val])
}

// for in loop over maps are not iteratable
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");

for (const key in map) {
  console.log(key);
}

// for each loop
const coding = ["java", "js", "cpp", "HTML", "CSS", "python"];

coding.forEach( function (val){ // function itself will take parameter from coding array 
        // console.log(val)
} )

//using arrow function

coding.forEach((val)=>{
    // console.log(val)
})


// using alraedy declared function

function printMe(val){
    console.log(val)
}

// coding.forEach(printMe) // we have to give only referance of the function only dont have to call the function in for  each loop


// for each loop, not only iterate over the item element but also extract the index and complete array

coding.forEach((item , index, arr)=>{
        // console.log(item , index, arr)
})

// array of objects

const myCoding =[
{
    languageName : "JavaScript",
    extension :"js"
},
{
    languageName : "Java",
    extension :"java"
},
{
    languageName : "python",
    extension :"py"
}
]

myCoding.forEach((obj)=>{
    console.log(obj.languageName)
})
