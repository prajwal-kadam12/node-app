var greet = "Good MOrning";

var greetLength= greet.length;
console.log("Total Number of Characters :", greetLength);

var charAtIndex = greet.charAt(0);
console.log( "Characters Avaliable at Index 0 :", charAtIndex);


var lastCharSmartWay = greet.charAt(greet.length-1);
console.log("Last character using smart way is: ", lastCharSmartWay);

var lastCharAtIndex = greet.charAt(11);
console.log( "Characters Avaliable at Index 11 :", lastCharAtIndex);

var strOne = "Good MOrning";
var strTwo = "Hello";
var strResult = strOne.concat(strTwo);
// var strResult = strOne.concat(strTwo);
console.log(`String one: ${strOne}, String two: ${strTwo}, Concat Result:${strResult}`);

var greet = "Good Morning";
var indexOfM = greet.indexOf("M");
console.log(`Index of char M: ${indexOfM}`);

var replaceResult = greet.replace("Morning", "Evening");
console.log(`Replace result is: ${replaceResult}`);

var city = "  Pune  ";
console.log(`Before trim: ${city}, and it's length: ${city.length}`);

var trimResult = city.trim();
console.log(`After trim: ${trimResult}, and it's length: ${trimResult.length}`);

console.log(` Count the total number of spaces available in the start and in the end `);
var totalSpaces = city.length - trimResult.length;
console.log(`Total spaces available: ${totalSpaces}`);

var country = " unites state of america  ";
var trimStartResult = country.trimStart();
console.log(`Total spaces available in the start is: ${country.length - trimStartResult.length}`);

var age = 22;
console.log(`AGE ${age}, ${typeof(age)}`);

var ageString = age.toString();
console.log(`Age string: ${ageString}, data type: ${typeof(ageString)}`);

var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Result of includes: ${result}`);

var greet = "Good Morning";
var greetSclice = greet.slice(0,3);
console.log( `Slice Of 0,3 : ${greetSclice}`);

var city = "I Love Pune";
var citySplit = city.split(" ");
console.log(`Split Result Of City: ${citySplit}`);

var str = "My inspiration is Ratan Tata Sir";
var result = str.split(" ");
console.log(result);
console.log(`Total words: ${result.length}`);
