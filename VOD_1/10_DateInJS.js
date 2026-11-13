// Temporal.Now.instant() // latest date and time api

let myDate = new Date()
console.log(myDate) // not readable
console.log(myDate.toString())
console.log(myDate.toDateString()) // more readable
console.log(myDate.toLocaleString())

console.log(typeof myDate) // => object type

// let myCreatedDate = new Date(2023, 0,23, 5,3) // => (Jan 23 2023, 5:03:00 AM) month in javascript starts from 0

let myCreatedDate = new Date("2023-01-14") // here month start from 01

console.log(myCreatedDate.toDateString())


//++++++++++ TimeStamps in Date in JS +++++++++++++

let myTimeStamp = Date.now();
console.log(myTimeStamp) // A timestamp represents a specific point in time, usually as the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.

const myDate1= new Date(myTimeStamp) // timestamp to date
console.log(myDate1)

console.log(myDate1.getTime()) // date to timestamp
// 1 jan 1970 => unix epoch

// miliseconds to seconds
console.log(Math.floor(Date.now()/1000))

const newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())


const date = new Date();

console.log(
    date.toLocaleString("en-IN", { // we can control type of date required
        dateStyle: "full",
        timeStyle: "long"
    })
);