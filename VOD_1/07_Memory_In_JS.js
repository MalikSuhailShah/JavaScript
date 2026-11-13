/* Two types of memory is used in JS 
            1) Stack Memory (Used in case of primitive data types)
                  we always get a copy of original data in stack memory
                  If Any updation occurs it occurs , then it will occurs in copy of that original data

            2) Heap Memory (Used in case of non-Primitive data types)
               we always get a referance  from heap memory of original data
               If any updation occurs then it will occur in original data 
          

*/

// stack Memory

let myYoutubeName = "MalikShahDotCom"

let anotherName = myYoutubeName
anotherName = "RideOfWorld"

console.log(anotherName)// updations occurs only in copy  not at original myYoutubeName
console.log(myYoutubeName)// value of myYoutubeName remains unchanged


// Heap Memory

let userOne= {
    email:"user@google.com",
    upiId:"user@ybl"
}



let userTwo = userOne
userTwo.email="Malik@google.com"// original email gets updated


console.log(userOne.email)
console.log(userTwo.email)