console.log("=======1.First and Last Element on Consol =======");

const fruitsSeasonal = ["Banana","Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given Array is: ${fruitsSeasonal}`);
let indexOf = fruitsSeasonal[0]
console.log(`First Element Of The Array is : ${indexOf}`);
let indexOf1 = fruitsSeasonal[fruitsSeasonal.length-1]
console.log(`Last Element Of The Array Is: ${indexOf1}`);


console.log("====== 2. Add Element - Papaya Before the Banana ======");
console.log(`Before Adding: ${fruitsSeasonal}`);
let papayaShift = fruitsSeasonal.unshift("Papaya")
// console.log(papayaShift);
console.log(`After Adding: ${fruitsSeasonal}`);

console.log(`===== 3. Remove Mango From The Array ======`);
console.log(`Before Removing : ${fruitsSeasonal}`);
fruitsSeasonal.splice(4,1)
console.log(`After Removing: ${fruitsSeasonal}`);

console.log("====== 4. Add Element - Pineapple At Last Position  ======");
console.log(`Before Adding ${fruitsSeasonal}`);
fruitsSeasonal.push("Pineapple");
console.log(`After Adding: ${fruitsSeasonal}`);

console.log("======= 5. Insert Element: Dragon Fruit Before Water Melon =======");
console.log(`Before Inserting : ${fruitsSeasonal}`);
fruitsSeasonal.splice(fruitsSeasonal.length-2, 0, "Dragon Fruit")
console.log(`After Inserting : ${fruitsSeasonal}`);


console.log("======= 6. Replace Element: Orange with Kiwi =======");
console.log(`Before Replacing : ${fruitsSeasonal}`);
fruitsSeasonal.splice(2, 1, "Kiwi")
console.log(`After Replacing : ${fruitsSeasonal}`);


console.log("====== 7. Log THe Element Starting From Index 1 to 4=======");
console.log(`Given Array Is : ${fruitsSeasonal}`);
let result = fruitsSeasonal.slice(1,4);
console.log(`Index From 1to 4 :${result}`);

console.log("======== 8. Last Three Elements=======");
console.log(`Given Array Is : ${fruitsSeasonal}`);
let result1 = fruitsSeasonal.slice(fruitsSeasonal.length-3);
console.log(`Last Three Elements :${result1}`);


