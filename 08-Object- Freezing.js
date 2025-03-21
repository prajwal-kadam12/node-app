const emp ={
    Name : "Prajwal",
    Age : 21,
    City : "Pune"
}
console.log(emp);
emp.pincode = 413104;
console.log(emp);


console.log("======Object Freezing (It can be fix the value) =========");
const employee ={
    Name : "Prajwal",
    Age : 21,
    City : "Pune"
}
console.log(employee);
Object.freeze(employee);
employee.designation = "Developer";
console.log(employee);
