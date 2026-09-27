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

const names = ["aLI", "sARA", "AHMED", "uSMAN"];

const formattedNames = names.map(name => 
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
);

console.log(formattedNames);
