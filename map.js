const products = [
  { name: "Simphony", price: 14000, category: "SmartPhone" },
  { name: "Sumsung", price: 20000, category: "Tablet" },
  { name: "iPhone-10", price: 100000, category: "Notebook" },
  { name: "Realme", price: 30000, category: "SmartPhone" },
];

function MapFunc(arr, callback) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

function logic(value) {
  return value.category === "SmartPhone";
}

console.log(MapFunc(products, logic));

const filterArr = products.filter(
  (product) => product.category == "SmartPhone"
);
// console.log(filterArr);
