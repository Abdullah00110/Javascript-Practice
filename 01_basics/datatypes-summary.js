// Primitive datatype  => Call by value

// Call by value  and refrence

// Javascript is dynamically typed language

// 7 types

// null means empty 

// String , Number , Boolean , null , undefined , Symbol, BigInt


const score = 100

const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

// let userEmail = undefined ; let userEmail1 ; => Both are same for undefined

const id = Symbol("123");
const anotherId = Symbol("123")

console.log(id === anotherId);

// Refrence (Non Primitive)

// Array , object , Function

let batsman = ["Rohit" , "Virat" , "Sachin" , "Dhoni"]

let myobj = {

    name : 'Abd',
    age : 21,
    roll : 761
}

const abc = function(){
    
}


// ++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive ) , heap(Non primitive)

let myobj1 = {
    email : 'abd@google.com',
    uid : 1 
}

let newobj = myobj1

// console.log(newobj)

newobj.uid = 2

console.log(newobj), console.log(myobj1)