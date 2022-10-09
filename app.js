const users = [
  { firstName: "SM", lastName: "Akbor", age: 24 },
  { firstName: "Rezwan", lastName: "Shamim", age: 14 },
  { firstName: "Yeakub", lastName: "Ali", age: 24 },
  { firstName: "Jahid", lastName: "Hasan", age: 13 },
  { firstName: "Fahim", lastName: "Khan", age: 13 },
  { firstName: "SM", lastName: "Alam", age: 14 },
  { firstName: "Sagor", lastName: "Zaman", age: 20 },
  { firstName: "SM", lastName: "Hasan", age: 13 },
  { firstName: "Rejaul", lastName: "Karim", age: 14 },
];

const newUser = users.reduce((acc, curr) => {
  if (acc[curr.age] > 15) {
    acc[curr] = curr;
  }

  return acc;
}, {});

console.log(newUser);
