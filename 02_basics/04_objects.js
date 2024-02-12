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


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.length)
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('IsLoggedIn'))

const emp = {
    name : "Abd",
    id : 1,
    State : {
        state_name : "Maharashtra",
        pin_code: '400104',
        city : 'Mumbai'
        
    },

    Rank:{
        Rank1 : 1,
        Rank2 : 2,
        Rank : 3,
        Student1 : 'Abdullah',
        Student2 : 'Usama',
        Student3 : 'Riyaz'
    }
}

console.log(emp.Rank.Rank2,emp.Rank.Student2);


const cricketer = {
    cricket_player :{
        Dhoni : 'Finisher',
        Rohit : 'Pull Shot and Dangerous man',
        Kohli : 'Best cover drive',
        Boom : 'Best yorker',
        Shami : "Best seam"
    }
}

console.log(cricketer.cricket_player.Dhoni)