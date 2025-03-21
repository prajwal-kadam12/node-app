const array = [2, 4, 6, 9, 1];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}


console.log(`======== Sum Of The Array Element =========`);
let sum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + element;
    console.log(element); 
    // console.log(`Sum Of The Array is : ${sum}`);  
}
console.log(`Total Sum Of The Array is : ${sum}`);


console.log(`========Even No. From The Array =======`);
let arrayNum = [7, 2, 5, 8, 6, 4, 11];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    if (element%2==0) {
        console.log(element);  
    }
}
console.log(` ======== For Of Loop =======`);

for (const element of arrayNum) {
    console.log(element);
    
}
  

const arrays = [2, 4, 6, 9, 1];
let add = 0;
for (const element of arrays) {
    add = add+ element;    
}
console.log(`Addition Of The Element Is: ${add}`);

const arraysNum = [2, 4, 6, 9, 1];
let oddSum = 0;
for (const element of arraysNum) {
    if (element%2==1) {
        console.log(element);
        oddSum = oddSum+element;     
    }
    // console.log(oddSum);
    
}
console.log(`Addition : ${oddSum}`);


console.log("===========Array Rverse Travers==========");
let arrayNumber = [7, 2, 5, 8, 6, 4, 11];
let addtion = 0;
for (let index = arrayNumber.length-1; index >= 0; index--) {
    const element = arrayNumber[index];
    console.log(element);
    addition = addtion+element;   
}
console.log(`Addition : ${addtion}`);


console.log("=========Array Join Method ========");
const result = arrayNumber.join("Prajwal,");
console.log(result);

console.log("========concat Method =========");
let Result = arrayNum.concat(arrayNumber);
console.log(`Concat Array: ${Result}`);


