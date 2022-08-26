// Syntactic Sugar

class Instructor {
  // properties / attributes / state
  name;
  designation = 'Web Course Instructor';
  team = 'Web team';
  location;

  //Constructor
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  //   methods inside a class
  startSupportSession(time) {
    console.log(`start the support sesion at ${time}`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}`);
  }
}

// creating a new object of Instructor class
const aamir = new Instructor('aamir', 'Chittagong');
console.log(aamir);
console.log(aamir.startSupportSession('9.00'));
console.log(aamir.createQuiz(30));

// creating another new object of Instructor class
const solaiman = new Instructor('Solaiman', 'Dhaka');
console.log(solaiman);
