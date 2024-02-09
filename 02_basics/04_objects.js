// const tinderUser = new Object()
const tinderUser = {} 

tinderUser.id = 123
tinderUser.name = 'Abd'
tinderUser.isLoggedIn = true

// console.log(tinderUser);


const regularUser = {
    email : "some@yahoo.com",
    fullname:{
        userfullname: {
            firstname : "Abdullah",
            surname : "Sunasara"
        }
    }
}

console.log(regularUser.email)

// console.log(regularUser.email);
// console.log(regularUser.fullname.userfullname.firstname.surname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
// console.log(obj1 , obj2);


const obj3 = Object.assign(obj1, obj2)
console.log(obj3);

// const chai = {
//     chainame : "masala",
//     chaiprice : 15
    
// }


const user = [
    {
        id : 1,
        email : 'a@gamil.com'
    },

    {
        id : 1,
        email : 'a@gamil.com'
    },

    {
        id : 1,
        email : 'a@gamil.com'
    }
]

user[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))