// Defining a type
type Person1 = {
    name: string;
    age: number;
  };
  
  // Extending a type using intersection
  type Employee1 = Person & {
    employeeId: number;
  };
  
  // Using union types
  type Status = "active" | "inactive";
  
  // Using type aliases with tuples
  type Point = [number, number];
  
  // Using a type in a function
  function printStatus(status: Status): void {
    console.log(`The status is: ${status}`);
  }
  
  const employee1: Employee1 = {
    name: "Bob",
    age: 25,
    employeeId: 5678,
  };
  
  const point: Point = [10, 20];
  
  printStatus("active");
  console.log(employee1);
  console.log(point);
  