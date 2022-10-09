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

// const newUser = users.map((user) => {
//   let Name = user.firstName + user.lastName;

//   return Name;
// });

// // console.log(newUser);
// const reduceUser = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }

//   return acc;
// }, {});
// const reduceName = users.reduce((acc, curr) => {
//   let fullName = curr.firstName + " " + curr.lastName;
//   acc = { FullName: fullName };

//   //   acc[curr] += {
//   //     ...curr,
//   //     FullName: fullName,
//   //   };

//   return acc;
// }, {});
const reduceName = users.reduce(
  (acc, curr) => [...acc, curr.firstName + " " + curr.lastName],
  []
);

console.log(reduceName);

// const newUsers = users.reduce((acc, curr) => {
//   let { age } = curr;
//   if (acc[age]) {
//     acc[age]++;
//   } else {
//     acc[age] = 1;
//   }

//   return acc;
// }, {});
// console.log(newUsers);

const obj = { name: "SM Akbor", age: 24 };
const obj2 = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [key, value.age * 2])
);
console.log(obj2);
