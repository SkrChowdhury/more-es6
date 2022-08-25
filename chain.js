const users = [
  {
    id: 1,
    name: 'abul',
    job: 'doctor',
  },
];
console.log(users[0].id);

const data = {
    count: 5000;
    data: [
        {
            id: 1, 
            name: 'babul', 
            job: 'leader'
        },        {
            id: 2, 
            name: 'kabul', 
            job: 'leader'
        }
    ]
}

const firstJob = data.data[0].job;
console.log(firstJob);

// Optional Chaining 
const userFloor = user.address.stret?.second;