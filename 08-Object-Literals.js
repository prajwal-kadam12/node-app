
let persons = {
     Name : "Prajwal",
     Age : 21,
     City : "Pune"

}
console.log(`Person Name : ${persons.Name}`);
console.log(`Pesron Age : ${persons.Age}`);
console.log(`Person City : ${persons["City"]}`);
console.log(typeof persons);

console.log("=======Updating Properties ========");
persons.Age = 30;
console.log(persons);

persons.City =" Mumbai";
console.log(persons);

console.log("======Deleting Property ======");
delete persons.City;
console.log(persons);

console.log(" ======= After Object Creattion  We can Add New Properties ========");
persons.isMarried = true;
persons.designation = "Developer";
console.log(persons);

console.log("======== Traversing Object =========");
let person = {
   Name: "Prajwal",
   Age: 30,
   isMarried: true, 
   designation: "Developer" 
}

for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(persons, key)) {
        const element = person[key];
        console.log(`${key} ==>${element}`);
        
    }
}

let student ={
    fName : "Pratik",
    lName : "Kadam",
    age : 25,
    collage : "Genba Sopanrao Moze Collage Of Engineering Balewadi",
    address :{
        atPost : "Shirsatwadi",
        street : "Near Indapur-Baramati Highway",
        tal : "Indapur",
        dist : "pune",
        walk : function(){
            console.log(`I can Walk.....`)
            
        }
    }
}
console.log(student.fName);
console.log(student.lName);
console.log(student.age);
console.log(student.collage);
// console.log(student.address);
// console.log(student.address.atPost);
student.address.floorNumber= 10;
console.log(student.address);
student.address.walk();
const value1 = JSON.parse(JSON.stringify(student));
console.log(value1);


let employee ={
    fName : "Pratik",
    lName : "Kadam",
    age : 25,
    collage : "Genba Sopanrao Moze Collage Of Engineering Balewadi",
    address :{
        atPost : "Shirsatwadi",
        street : "Near Indapur-Baramati Highway",
        tal : "Indapur",
        dist : "pune",
    },
    walk : function(){
        console.log(`I can Walk.....`);
        
    },
    details : function(){
        console.log(`Employee Detail : Name :${this.name},Ade: ${this.age},City: ${this.city}`);
        
    }
}
employee.walk();
employee.details();


console.log("=======================");
let persons1 = {
    Name: "Prajwal",
    Age: 30,
    isMarried: true, 
    designation: "Developer",
    friends : ["prahwal", "sankalp", "aashish","ram"]
 }
console.log(persons1.friends);

const key = Object.key;
console.log(key);

const value = Object.values;
console.log(value);
