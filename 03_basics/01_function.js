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


function loginusermessage(username){
    if (username === undefined){
        console.log("Please enter a name...");
        return
    }
    return `${username} just logged in`
}

console.log(loginusermessage());
