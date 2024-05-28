// Defining an interface
interface Person {
    name: string;
    age: number;
  }
  
  // Extending an interface
  interface Employee extends Person {
    employeeId: number;
  }
  
  // Merging interfaces
  interface Person {
    gender: string;
  }
  
  // Implementing an interface in a class
  class Developer implements Employee {
    name: string;
    age: number;
    employeeId: number;
    gender: string;
  
    constructor(name: string, age: number, employeeId: number, gender: string) {
      this.name = name;
      this.age = age;
      this.employeeId = employeeId;
      this.gender = gender;
    }
  }
  
  const dev: Developer = new Developer("Alice", 30, 1234, "female");
  console.log(dev);
  