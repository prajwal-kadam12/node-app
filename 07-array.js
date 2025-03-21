const array = [7, 8, 9, 3, 4 ,5];
console.log(array);
console.log(`length of the array is : ${array.length}`);
const elementAtIndex2 = array[2];
console.log(`Element at Index 2: ${elementAtIndex2}`);

array[4] = 60;
console.log(`After Update`);
console.log(array);

console.log(`Push and Unshift Operation`);
 const push = array.push(200);
 console.log(`Performing the Push Operation : ${push}`);
 
const unshift = array.unshift(100);
console.log(`Performing the unShift Operation : ${unshift}`);


console.log(`POP and shift operation`);
const pop = array.pop();
console.log(`performing pop operation : ${pop}`);

const shift = array.shift();
console.log(`Performing the Shift Operation : ${shift}`);
console.log(array);
const slice = array.slice(3);
console.log(`Performing the Slice Operation : ${slice}`);

let splise = array.splice(2, 0, 111);
console.log(`Performing the Splice Operation : ${splise}`);
console.log(array);
let splise1 = array.splice(2, 0, 111, 333);
console.log(`Performing the Splice Operation : ${splise1}`);
console.log(array);

let arraySplice = array.splice(3, 2, 66);
console.log(`Performing the Splice Operation : ${arraySplice}`);
console.log(array);





