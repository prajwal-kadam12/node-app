let arrayNumber = [7, 2, 5, 8, 6, 4, 11];
console.log(arrayNumber);

let duplicateArray = [...arrayNumber];
console.log(duplicateArray);

// let duplicateArray = arrayNumber;
// console.log(duplicateArray);


console.log("========== spred Operator (...)");

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 55];
 const mergeArray = [...arrayOne,...arrayTwo]
console.log(mergeArray);
