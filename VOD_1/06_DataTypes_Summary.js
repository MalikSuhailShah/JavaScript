/* 
Types of DataTypes (  based on how data is stored in memory and accessed) :-   
                  1) Primitive 
                  2) Non-Primitive

* Java Script is Dynamically typed Language i.e checking occurs at runtime rather than during compilation

const score =100; no need to specify data ype along with the const keyword but for type script language we have to specify all that along with const keyword 


 #1 primitive (call by value)
 7 types : 1) String 
           2) Number 
           3) Boolean 
           4) Null 
           5) Undefined 
           6) Symbol 
           7) BigInt


 #2 Non - Primitive (Call by reference)
 3 Types : 1) Array 
           2) Objects
           3) Function


            
 */

const id = Symbol('123')
const anotherId = Symbol('123')
/* id and anotherId will always be different*/
// console.log(id)
// console.log(anotherId)

// console.log(id===anotherId) // output always will be false

const myFunction = function(){
   console.log("Hello world")
    
}

const heros = ["IronMan", "Thor", "Hulk","Dr Strange"]

let myobj =  {
    name: "Ritesh",
    age: 23 ,
}

const big = 345243627672n
console.log(typeof big)