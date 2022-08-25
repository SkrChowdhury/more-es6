// 1. var let const
//break up with var

const numbers = [87, 23, 34, 13, 24, 46, 56];
let salary = 464;
salary = 345;

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
  const remaining = (salary = salary * tax);
  const total = remaining + bonus;
  return total;
}

// 3. template string
const elementHTML = `
<div>
<h3> Name: </h3>
<p>Address: </p>
<p>Salary: ${calculateSalary(10000, 0, 0)} </p>
<p>Others: ${numbers[2]} </p>
</div>`;

// 4. Arrow Function 

const doubleIt = x => x * 2; //one parameter
const calculateSalary2 = (salary, tax. bonus) => salary - salary * tax + bonus;

// 5. Spread 
const ages = [11,23,45,56,43,45];
const newAges = [...ages, 23,23,45,67,55];

// 6. destructuring 
const {x, y, ...c} = {x:45, y: 12, z : 44, name:'Sakib', salary: 6262525}; //object

const [a, b, ...r] = [12,23,45,65,43]; // array