let myDate = new Date ()
console.log(myDate.toLocaleDateString())
console.log(typeof myDate);

let newDate = new Date()
console.log(newDate)

newDate.toLocaleString(
    'default',{
        weekday:'long',
        timeZone: 'IST'
    }
)

// console.log(newDate.timeZone)