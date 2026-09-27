// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers
//   .filter(num => num > 3)
//   .map(num => num * 10);

// console.log(result);
// // [40, 50, 60]


// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);
// // [2, 4]


// https://app.notion.com/p/JavaScript-map-filter-Exercises-3e744f8252fa80ec8e2ffda2e1dbeb83?source=copy_link

// question :

// 3. Convert names into formatted names
// Har name ka first letter uppercase aur baqi lowercase karo.

// const names = ["aLI", "sARA", "AHMED", "uSMAN"];

// // Expected: ["Ali", "Sara", "Ahmed", "Usman"]

// const names = ["aLI", "sARA", "AHMED", "uSMAN"];

// const formattedNames = names.map(name => 
//   name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// );

// console.log(formattedNames);
// 🟢 Level 1 — Easy
// Question 1
// Array mein names diye hain:

// const names = ["ali", "sara", "ahmed", "usman"];

// map() use karke har name ka first letter uppercase karo.

// Expected output:

// ["Ali", "Sara", "Ahmed", "Usman"]
// const names = ["ali", "sara", "ahmed", "usman"];
// let firstliteruppercase = names.map(name =>
//     name.charAt(0).toUpperCase()+ name.slice(1) )
//     console.log(firstliteruppercase)




// Question 2
// Numbers ko double karo:

// const numbers = [2, 4, 6, 8, 10];
// Expected output:

// [4, 8, 12, 16, 20]
// const numbers = [2, 4, 6, 8, 10];

// const numbersDuble = numbers.map(number => number * 2)
// console.log(numbersDuble)

// Question 3
// Har number mein 5 add karo:

// const numbers = [10, 20, 30, 40];

// Expected output:
// [15, 25, 35, 45]
// const numbers = [10, 20, 30, 40];
// const addNumbers = numbers.map(number => number + 5)
// console.log(addNumbers)

// 🟡 Level 2 — Thora practice
// Question 4
// Names ko uppercase mein convert karo:

// const names = ["ali", "sara", "ahmed", "usman"];

// Expected:

// ["ALI", "SARA", "AHMED", "USMAN"]

// Hint: toUpperCase() use hoga.
// const names = ["ali", "sara", "ahmed", "usman"];
// const namesUpercase = names.map(name =>  name.toUpperCase() )
// console.log(namesUpercase)


// Question 5
// Products ke prices hain:



// Har price mein 10% increase karo.

// Expected:

// [110, 220, 330, 440]
// const prices = [100, 200, 300, 400];
// const increaseTenPresent = prices.map(price => Math.round(price * 1.10))
// console.log(increaseTenPresent )

// Question 6
// Ye words diye hain:

// const words = ["apple", "banana", "mango", "orange"];

// map() use karke har word ki length nikalo.

// Expected:

// [5, 6, 5, 6]

// Hint: .length
// const words = ["apple", "banana", "mango", "orange"];
// const definelength = words.map(word => word.length)
// console.log(definelength)

// 🟠 Level 3 — Tumhare current question jaisa
// Question 7
// const names = ["aLI", "sARA", "aHMED", "uSMAN"];

// Har name ko proper format mein convert karo:

// aLI → Ali
// sARA → Sara
// aHMED → Ahmed
// uSMAN → Usman

// Expected:

// ["Ali", "Sara", "Ahmed", "Usman"]
const names = ["ali", "sara", "ahmed", "usman"];

let firstliteruppercase = names.map(name =>
    name.charAt(0).toUpperCase() + name.slice(1)
);

console.log(firstliteruppercase);


// Question 8
// const cities = ["kARACHI", "lAHORE", "iSLAMABAD", "mULTAN"];

// Har city ko proper format mein convert karo.

// Expected:

// ["Karachi", "Lahore", "Islamabad", "Multan"]
// const cities = ["kARACHI", "lAHORE", "iSLAMABAD", "mULTAN"];
// const citiesIncorectLiter = cities.map(city =>
//      city.toLowerCase().charAt(0).toUpperCase()+ city.slice(1) )
//      console.log(citiesIncorectLiter)

// Question 9 — 🔥 Challenge
// const names = ["ALI KHAN", "SARA AHMED", "USMAN ALI"];

// map() use karke poore names ko lowercase karo.

// Expected:

// ["ali khan", "sara ahmed", "usman ali"]

// Question 10 — 🔥 Challenge
// const numbers = [1, 2, 3, 4, 5];

// map() use karke har number ka square nikalo.

// Expected:

// [1, 4, 9, 16, 25]

// Hint:

// number * number

// const names = ["ali", "sara", "ahmed", "usman"];
// let firstliteruppercase = names.map(name =>
//     name.charAt(0).toUpperCase()+ name.slice(1) )
//     console.log(firstliteruppercase)
