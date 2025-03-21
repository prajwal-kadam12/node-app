
// Two reference variable can be point the same object
let employee = {
    Name : "Prajwal",
    Age : 21,
    City : "Pune"
}
console.log(employee);
let student = {};
student= employee;
console.log(student);

const clonedObject = Object.assign({}, employee);
console.log(employee);
console.log(clonedObject);

let std ={
    name : "prajwal",
    age : 21,
    collage: "GSMCOE Balewadi"
}

const Address= {
    street :"balewadi gaon ",
    dist : "pune"
}
let MergeData = Object.assign({}, std, Address);
console.log(MergeData);
