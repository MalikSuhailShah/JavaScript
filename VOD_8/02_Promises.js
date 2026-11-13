const promiseOne  = new Promise(function (resolve, reject){ 
    
    /*
     Perform an asynchronous task
     e.g. database call, cryptography, network request */

    setTimeout(function (){
        console.log(`Async task completed!!`)
        resolve();
    }, 1000)
})
// .then() executes when the Promise is fulfilled
promiseOne.then(function (){
    console.log(' Async resolves ')
})

//  We don't need to store a Promise in a variable if we only want to consume it immediately using .then()
new Promise(function (resolve, reject){
    setTimeout(function (){
        console.log("'Async task 2 completed!!'")
        resolve();
    }, 1000)
}). then(function (){
    console.log(`Async 2 resolves`)
})


const promiseThree = new Promise(function (resolve , reject){
    setTimeout(function (){
        resolve({username:"Chai", email : "chai@example.com"})
    }, 1000)
})


promiseThree.then(function(user) 
{
     // The value passed to resolve() becomes
    // the argument received by the .then() callback.
    console.log(user);
})


const promiseFour = new Promise(function ( resolve, reject){
    setTimeout(function (){
        let error = false;

        if(!error){
            resolve({username:"malik", password:"987654321"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
        
    }, 2000)
})

//Chaining

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
    // The returned value becomes the fulfillment
    // value received by the next .then().
 })
.then ((username) => {
    console.log(username);
 })
.catch((error) => {
      // Handles Promise rejection/errors in the chain.
    console.log(error)
 })
 .finally(() => {
      // Executes after the Promise is settled,
        // whether fulfilled or rejected.
        // Commonly used for cleanup.
    console.log("The promise is either resolved or rejected !")

}) 



 const promiseFive = new Promise(function (resolve, reject){
         setTimeout(function (){
        let error = false;

        if(!error){
            resolve({username:"malik", password:"12341"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
        
    }, 2000)  
 })

async function consumePromiseFive(){
    // const response = await promiseFive; // this can not handle error so we have to usse try and catch block
    // console.log(response)


    try{
        // If promiseFive is rejected, await throws the rejection reason.
        // try...catch handles that error.
        const finalResponse = await promiseFive;
        console.log(finalResponse)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive();


// this executes before above code
async function getAllUser(){
   try{
     const response = await  fetch('http://jsonplaceholder.typicode.com/users')

      // response.json() returns a Promise.
        // await gives us the actual parsed JSON data.

      const data = await  response.json(); // this operation alo need time so we have to use await here also without await it will not work

      console.log(data)
   }
   catch(error){
    console.log('E:', error)
   }
}

// getAllUser();



// this executes after all the above code
 fetch('http://jsonplaceholder.typicode.com/users')
 .then( ( response ) => {
    return response.json();
 })
 .then ( (data ) => {
    console.log(data);
 })
 .catch( ( error ) => console.log(error))