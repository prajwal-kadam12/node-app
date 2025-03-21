const array = [4, 9, 6, 3, 8, 1,5];
const sum = array.reduce((runningTotal, element) =>{
    return runningTotal + element;
},0);
console.log(sum);
const sumMultiplesOf5 = array_numbers
    .filter(num => num % 5 === 0)  // Filter numbers that are multiples of 5
    .reduce((acc, curr) => acc + curr, 0);  // Sum them using reduce
console.log("Sum of multiples of 5:", sumMultiplesOf5);



// Sum of the even number By Using THe FilterAn REduce method
const evenArray = array.filter((element)=>{
    return element % 2 == 0;
}).reduce((runningTotal, element)=>{
    return runningTotal +element;
});
console.log(evenArray);
 
const marksArray = [10,[1, 2],3,[2,[67,8]]];
let flatArray = marksArray.flat(2);
let markArrayLength = marksArray.length;
console.log(markArrayLength);

console.log(flatArray);
let flatArrayLength = flatArray.length;
console.log(flatArrayLength);

