const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ]; 
const  Add10 = arrayNumbers.map((element)=>{
    return element + 10;
});
console.log(`Array after adding 10 to each element ${Add10}`);

const  cub = arrayNumbers.map((element)=>{
    return element*element*element;
});
console.log(`Cube each array element and log the result :${cub}`);

const  addIndex = arrayNumbers.map((element, index)=>{
    return element + index;
});
console.log(`Array after adding index to each element :${addIndex}`);