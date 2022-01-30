const Employees = import("./Employees");

const employeeArray = [
  {
    id: 1,
    name: "xyz",
    age: 19,
    salary: 600000,
  },
  {
    id: 2,
    name: "abc",
    age: 21,
    salary: 530000,
  },
  {
    id: 3,
    name: "def",
    age: 30,
    salary: 550000,
  },
  {
    id: 4,
    name: "vgf",
    age: 64,
    salary: 720000,
  },
];

const obj = new Employees(employeeArray);

let sortedArray = obj.sortemployees("name", "<");
console.log(sortedArray);

sortedArray = obj.sortemployees("name", ">");
console.log(sortedArray);

let filteredArray = obj.filterByAge("=", 20);
console.log(filteredArray);

filteredArray = obj.filterByAge("<", 50);
console.log(filteredArray);