const array = [20, 30, 40, 50, 60, 10];
array.forEach((element, index, array) => {
    console.log(element, index, array);
    
});
console.log("Only Element");

const arrayNum = [20, 30, 40, 50, 60, 10];
array.forEach((element) => {
    console.log(element);
    
});


const array1 =[20,3,5,66,7,3];
let sum =0;
array1.forEach((element) => {
   sum = sum +element;
   return element * element;
    
});
console.log(sum);


const array2 =[20,3,5,66,7,3];
const  array3 = array1.map((element) => {
   return element * element;
    
});
console.log(array3);
