const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const sum = array_numbers.reduce((runningTotal, element) =>{
    return runningTotal + element;
},0);
console.log(`Sum Of Number Using Reduce Method : ${sum}`);


const sumMultiplesOf5 = array_numbers.filter(num => num % 5 === 0)  // Filter numbers that are multiples of 5
    .reduce((acc, curr) => acc + curr, 0);  // Sum them using reduce
console.log("Sum of multiples of 5:", sumMultiplesOf5);