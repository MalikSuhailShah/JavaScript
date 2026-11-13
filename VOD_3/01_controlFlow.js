

const temp =45

if(temp<50) console.log("temperatue is less than 50")
    else console.log("Temperature greater than 50")

console.log("This will always  execute !!")
// comparing operator => > , < , >= , <= , === , != , == , !==

const score = 200

if(score > 100){
    let power = "fly" // the power variable only exist in if block, can not be accessed outside of this block

    console.log(`User Power: ${power}`)
}


const balance  = 1000

// if(balance > 1000) console.log("Executed "), console.log("Executed again");  avoid this syntax


if(balance <500) console.log("Less than 500")
else if(balance <600) console.log("Less than 600")
else if(balance <750) console.log("Less than 750")
else if(balance <1200) console.log("Less than 1200")
else  console.log("greater than 1200")

const isLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isLoggedIn && debitCard) console.log("Allowed for shopping")

if(loggedInFromEmail || loggedInFromGoogle ) console.log("Allowed to log In")



