// 2 ways of decalring an array

const myArray = [1, 2, 3, 4, 'khyati', 'baria']
const herosArray = new Array('hi', 'hello')


console.log("herosArray", herosArray);

//Methods on Arrays
herosArray.push("world");
herosArray.unshift("new");

console.log("herosArray", herosArray);

// slice and splice imp diff is splice t

/*
whenever we copy an array it creates a shallow copy of it.
Meaning that it will give only refernece of the variable
*/