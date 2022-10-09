const users = [
  { firstName: "SM", lastName: "Akbor", age: 24 },
  { firstName: "Rezwan", lastName: "Shamim", age: 13 },
  { firstName: "Yeakub", lastName: "Ali", age: 24 },
  { firstName: "Jahid", lastName: "Hasan", age: 22 },
  { firstName: "Fahim", lastName: "Khan", age: 21 },
  { firstName: "Shahin", lastName: "Alam", age: 13 },
  { firstName: "Sagor", lastName: "Zaman", age: 20 },
  { firstName: "Jahid", lastName: "Hasan", age: 22 },
  { firstName: "Rejaul", lastName: "Karim", age: 13 },
];

const newUser = users.reduce((acc, curr) => {
  if (acc[curr.age] > 15) {
    acc[curr] = curr;
  }

  return acc;
}, {});

console.log(newUser);
