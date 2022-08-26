const numbers = [1, 3, 5, 7, 9, 12, 45, 63, 2, 3, 56, 78, 5, 7, 90];

const fives = numbers.find((num) => num % 5 === 0);
console.log(fives); // find() gives only 1st element that matched
const fiveAll = numbers.filter((num) => num % 5 === 0);
console.log(fiveAll); // filter() gives only all elements that matched in an array

const products = [
  { id: 1, name: 'laptop', price: 65000 },
  { id: 1, name: 'mobile', price: 80000 },
  { id: 1, name: 'watch', price: 30000 },
  { id: 1, name: 'tablet', price: 23000 },
  { id: 1, name: 'speaker', price: 29000 },
];

const cheap  = products.find(product => product.price < 40000);
console.log (cheap); //only 1st matched element
