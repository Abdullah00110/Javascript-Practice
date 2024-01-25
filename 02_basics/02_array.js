const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// console.log(dc_heros.sort())
// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

const final_hero = marvel_heros.concat(dc_heros)
// console.log(final_hero);

const real_hero = [...marvel_heros , ...dc_heros]
console.log(real_hero);

const another_array = [1,2,3,[4,5,6] , [1,2,[3,4], 5,[7,8]]]
const real_another_array = another_array.flat(4)
console.log(real_another_array);