const numbers = [12, 5, 34, 56, 7, 76, 54, 35, 67, 1, 54, 34, 23];
const bigNums = numbers.filter((number) => number > 30);
const smallNums = numbers.filter((n) => n < 10);
const evenNums = numbers.filter((n) => n % 2 === 0);
console.log(bigNums);
console.log(smallNums);
console.log(evenNums);

const products = [
  { id: 1, name: 'laptop', price: 45000 },
  { id: 1, name: 'mobile', price: 80000 },
  { id: 1, name: 'watch', price: 35000 },
  { id: 1, name: 'tablet', price: 23000 },
  { id: 1, name: 'speaker', price: 29000 },
];

const expensive = products.filter(product => product.price > 30000);
console.log(expensive);
