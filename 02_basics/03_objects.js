// Singleton ------> Constructor se banega usko singleton kahege aur literal se banega vo kabhi bhi singleton nhi hai

// Object.create()

// Literal

const mySym = Symbol("mykey1")
const jsUser = {
    name : "Abdullah",
    "Full name" : "Abdullah Sunasara",
    age : 13,
    [mySym] : "mykey1",
    location : "Mumbai",
    email : 'abdullah@google.com',
    isLoggedIn : true,
    lastLoginDays : ['Tuesday' , 'Friday']

}

console.log(jsUser.name)
console.log(jsUser["name"]);

console.log(jsUser["Full name"])

console.log(jsUser[mySym]);


// const email = "abdullahbard.com"

// console.table(['name' , 'Full name' , 'age' , [mySym] , 'location' , 'email' , 'isLoggedIn' , 'lastLoginDays'])

// Object.freeze(jsUser)



// jsUser.email = "abdullah@google.com"
// console.log(email);

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js User")
}

console.log(jsUser.greeting);

console.log(jsUser)

console.log(isLoggedIn)

console.log(typeof isLoggedIn)