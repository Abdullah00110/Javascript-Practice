// const User = {
//     username : "Abdullah",
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to the website`);
//         console.log(this);
//     }

// }

// User.welcomeMessage()
// User.username = "Sam"
// User.welcomeMessage()

// function chai(){
//     let username = "Abd"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "Abd"
//     console.log(this);
// }

// chai()

const addTwo = (num1 , num2) => {
      return num1 + num2
}

console.log(addTwo(4,5))

const addTwoo = (num1, num2) => num1 + num2        // ------------> Implicit
console.log(addTwoo(2,3));

const addNumber = (num1, num2) => (num1 + num2)
console.log(addTwoo(2,3));


const bhai = (n1 ,  n2) => ({username:"abd"})
console.log(bhai(2,3));

// const myArray = [2,3,4,5,6]
// myArray.forEach(function)