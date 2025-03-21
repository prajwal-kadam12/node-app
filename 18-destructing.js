const person ={
    name : "Prajwal",
    age : 20,
    city : "Pune",
    pin : 413104,
    country : "India",
    isMarried : true
}
// let name = person.name;
// let  age = person.age;
let{name,age,city,country=usa,pin,isMarried} = person;
console.log(name,age,city,country,pin,isMarried);



let array = [10, 11, 12, 13, 14];
const [n1, n2, n3 = "myLove", n4, n5] = array;
console.log(n1, n2, n3 );
console.log(array);