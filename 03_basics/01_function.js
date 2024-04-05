// function sayMyName(){
//     console.log("A")
//     console.log("B")
//     console.log("D")
//     console.log("U")
//     console.log("L")
//     console.log("L")
//     console.log("A")
//     console.log("H")
// }

// sayMyName()

// function sayHello(a, b){
//     console.log(a + b);
// }

// const result = sayHello(3,7)

// console.log(result);



// function loginusermessage(username){
//     return `${username} just logged in`
// }

// const result = "Abdullah";
// console.log(result)


// ` String interpolation
// function loginusermessage(username){
//     if (username === undefined){
//         console.log("Please enter a name...");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginusermessage())


// function addTwoNumbers(n1 , n2){
//       console.log(n1 + n2);
// }

// addTwoNumbers(3,3)

// function sumOfTwonum(n1,n2){
//         return n1 , n2
// }

// const result = sumOfTwonum(3,3)
// console.log(result);

// ... -> rest operator , ... -> spread operator
// function calculateCardNum(...num1){
//     return num1
// }

// console.log(calculateCardNum(3,2,1));


const User = {
     username : "Abdullah",
     price : 199
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

handleObject(User)