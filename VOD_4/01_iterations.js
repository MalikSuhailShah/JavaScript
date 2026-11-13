// for

let array = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < array.length; i++) {  // ctrl +d for duplicates
    const element = array[i];

    // console.log(element)

    if(array[i]==5) console.log("Half of the array visited");

    
}

// console.log(element)


// nested loops

for(let i =0;i<=10;i++){
    for(let j=0;j<=10;j++)
    {
        if(i==j) console.log(i+j)
    }
}

// while loops 
 let index =1;


 while(index<=10){
    console.log(index)
    index+=2
 }


 let myArr = ["flash", "Superman", "Batman"]

 let arr =0;

 while(arr<myArr.length){
    console.log(`value is ${myArr[arr]}`)
    arr++
 }


 // do - while loop
 let idx=0;

 do{
        console.log(`value is ${idx}`)
        idx+=9
 } while(idx<99)  // condition is check later and even for false condition atleast one iteration runs