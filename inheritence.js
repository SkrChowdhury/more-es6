// Syntactic Sugar

class TeamMember {
  name;
  location;

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

// Instructor Class
class Instructor extends TeamMember {
  // properties / attributes / state
  designation = 'Web Course Instructor';
  team = 'Web team';

  //Constructor
  constructor(name, location) {
    super(name, location);
  }

  //   methods inside a class
  startSupportSession(time) {
    console.log(`start the support sesion at ${time}`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}`);
  }
}

// Developer Class
class Developer extends TeamMember {
  // properties / attributes / state
  designation = 'Web Course Instructor';
  team = 'Web team';
  tech;

  //Constructor
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }

  //   methods inside a class
  developFeature(feature) {
    console.log(`Please develop the feature ${feature}`);
  }

  release(version) {
    console.log(`Please release the version  ${version}`);
  }
}

// Job Placement Class
class JobPlacement extends TeamMember {
  // properties / attributes / state
  designation = 'Job Placement Commandos';
  team = 'job placement';
  region;

  //Constructor
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }

  //   methods inside a class
  provideResume(feature) {
    console.log(`Please develop the feature ${feature}`);
  }

  prepareStudent(version) {
    console.log(`Please release the version  ${version}`);
  }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement('Bipasha', 'Calcutta', 'India');
console.log(bipasha);
