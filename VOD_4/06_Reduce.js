const myNums = [1,2,3,4,5,6]

const sum = myNums.reduce(function (acc, curr){
    console.log(`curr:- ${curr}, acc:- ${acc}`)
    return acc+curr
},0)

console.log(sum)

// arrow function

const totalSum = myNums.reduce((acc , curr)=> acc+curr,0)

console.log(totalSum)

const shoppingCart= [
    {
        course : 'DSA',
        price:11299
    },
    {
        course : 'WebD',
        price:10299
    },
    {
        course : 'ML',
        price:11299
    },
    {
        course : 'DL',
        price:15299
    },
    {
        course : 'Quant Trading',
        price:17299
    }
]

const totalPrice = shoppingCart.reduce((acc, item)=> acc + item.price, 0)

console.log(totalPrice)
