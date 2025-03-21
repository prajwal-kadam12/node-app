const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const greaterThan50 = arrayNumbers.filter(num => num > 50);
console.log("Numbers greater than 50 :", greaterThan50);


const evenNumber = arrayNumbers.filter(num => num %2 ==0);
console.log("Even Number", evenNumber);

const oddNumber = arrayNumbers.filter(num => num %2 ==1);
console.log("Odd Number :", oddNumber);

const mulNumber = arrayNumbers.filter(num => num %5 == 0);
console.log("Numbers Multiply By 5:", mulNumber);

const numberGreter = arrayNumbers.filter(num => num>20 && num <50);
console.log("Numbers greater than 20 and Less Than 50:", numberGreter);