class Student{
    // data member
    name 
    collage 
    age 
    city

    // Constructor
     constructor(name, collage,age, city ){
         this.name = name;
         this.collage = collage;
         this.age = age;
         this.city = city;
    }
    // Member Function
    details(){
        console.log(` Name :${this.name}, Collage :${this.collage}, age :${this.age}, City :${this.city}`);
        
    }
}
const StudentJenny = new Student("Prajwal", "GSMCOE", 21, "pune");
console.log(StudentJenny);
let StdNew = new Student("Abhi","MIT ", 545, "Landon");
console.log(StdNew);
