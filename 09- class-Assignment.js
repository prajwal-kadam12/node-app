class vechile {
    Name
    Model
    Color
    Number
    Price
    constructor(Name, Model, Color, Number, Price) {
        this.Name = Name;
        this.Model = Model;
        this.Color = Color;
        this.Number = Number;
        this.Price = Price;
    }
    details() {
        console.log(`Name: ${this.Name}, Model: ${this.Model}, Color: ${this.Color}, Number: ${this.Number}, Price: ${this.Price}`);
    }
}
let newVechile = new vechile("HERO HONDA", 2021, "Red-Black", "MH41Ak1209", 100000);
console.log(newVechile);
let newVechile1 = new vechile("Royal Enfield", 2023, "Black", "MH41Ak2004", 200000);
console.log(newVechile1);
let newVechile2 = new vechile("Thar", "LX", "Black", "MH41Ak1219", 250000);
console.log(newVechile2);
let newVechile3 = new vechile("Scarpio", 2020, "White", "MH41Ak1209", 2000000);
console.log(newVechile3);
let newVechile4 = new vechile("Splender", 2021, "Blue-Black", "MH41Ak1209", 750000);
console.log(newVechile4);

console.log("==============Task 2================");
class collage {
    Name
    Taluka
    City
    University
    constructor(Name, Taluka, City, University) {
        this.Name = Name;
        this.Taluka = Taluka;
        this.City = City;
        this.University = University;
    }
    details() {
        console.log(`Name: ${this.Name}, Taluka: ${this.Taluka}, City: ${this.City}, University: ${this.University}`);
    }
}
let newCollage = new collage("COEP", "Pune City", "Pune", "COEP");
console.log(newCollage);
let newCollage1 = new collage("GSMCOE", "Haveli", "Pune", "SPPU");
console.log(newCollage1);
let newCollage2 = new collage("DY PATIL Univercity", "Pimpri Chincwad", "Pune", "DY University");
console.log(newCollage2);
let newCollage3 = new collage("SB Patil COllage", "Indapur", "Pune", "SPPU");
console.log(newCollage3);
let newCollage4 = new collage("Trinity Collage Of Engineering", "Yewalewadi", "Pune", "SPPU");
console.log(newCollage4);

 





