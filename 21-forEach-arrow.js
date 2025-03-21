console.log(" ============== Log the array element with its index using forEach() with an arrow function");
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ]; 
arrayNumbers.forEach((element, index) => {
    console.log(element, index);
});


console.log("================== Find the positive numbers and log on console using forEach() with an arrow function");
const array = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ]; 
array.forEach((element, index) => {
    if (element>0) {
        console.log(`Positive Number : ${element}, ${index}`);   
    }
});


console.log("================ Find the negative numbers, add them to a new array, and log the new array on console using an arrow function");
const array1 = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ]; 
let negativeNumber = [];
array1.forEach((element) => {
    if (element<0) {
        negativeNumber.push(element);
        
    }
});
console.log(`Negative umber Is: ${negativeNumber}`);



console.log("=============== Find the even numbers and log on console using forEach() with an arrow function");
const array2 = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ]; 
array2.forEach((element) => {
    if (element%2==0) {
        console.log(`Even Number From The Array : ${element}`);
    }
});


console.log("============= Find the sum of all elements from arrayNumbers and log the sum value on console");
const array3 = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ]; 
let sum = 0;
array2.forEach((element) => {
    sum = sum + element;
});
console.log(`Sum Of the Array is : ${sum}`);


console.log("======= Log the only even indexed array values on console using forEach() with an arrow function");
const array4 = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ]; 
array4.forEach((element, index) => {
    if (index%2==0) {
        console.log(index, element);  
    }
});