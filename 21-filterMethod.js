let array = [7, 15, 20, 3, 25, 2, 40];
const res = array.filter((element) => {
    return element%5 ==0;
});
console.log(res);
const array1 = [5, 2, 3, 1, 7];
let add = 0;
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    // console.log(element);
    add = add +element;
}
console.log(`${add}`);

