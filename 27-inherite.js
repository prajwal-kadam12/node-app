
// Parents Class 
class Vehicle {
    constructor(company, enginePower, yearMfg) {
        this.company = company;
        this.enginePower = enginePower;
        this.yearMfg = yearMfg;
    }
    details() {
        console.log(`Company name: ${this.company}, Engine Power: ${this.enginePower}, Year Of Mfg: ${this.yearMfg}`);

    }
}

// Child Class/ Derived Class
class car extends Vehicle {
    constructor(carType, company, enginePower, yearMfg) {
        super(company, enginePower, yearMfg);
      this.carType = carType;
    }
}
const cretaCar = new car("XUV", "Hyundai", "1500CC", 2024);
console.log(cretaCar);

class Truck extends Vehicle{
    constructor(Weight, NoOfWheels,company, enginePower, yearMfg){
        super(company, enginePower, yearMfg);
        this.Weight = Weight;
        this.NoOfWheels = NoOfWheels;
    }
}
const TruckData = new Truck("3000tone", "tata", "5000CC", "2023");
console.log(TruckData);
TruckData.details();

