class Employees {
    constructor(listOfEmployees) {
      this.listOfEmployees = listOfEmployees;
    }
  
    sortEmployees(attribute, sign) {
      const compare = (a, b) => {
        if (typeof a[attribute] === "number") {
          return a[attribute] - b[attribute];
        } else if (a[attribute] > b[attribute]) {
          return 1;
        } else if (a[attribute] < b[attribute]) {
          return -1;
        }
        return 0;
      };
  
      let newArray = this.listOfEmployees.sort(compare);
  
      if (sign === "<") return newArray;
      else return newArray.reverse();
    }
  
    filterByAge(sign, age) {
      let newArray = [];
      if (sign === "<") {
        newArray = this.listOfEmployees.filter((employee) => {
          return employee.age < age;
        });
      } else if (sign === ">") {
        newArray = this.listOfEmployees.filter((employee) => {
          return employee.age > age;
        });
      } else {
        newArray = this.listOfEmployees.filter((employee) => {
          return employee.age === age;
        });
      }
      return newArray;
    }
  }
  
  module.exports = Employees;