function isEven(num){
var result = num%2;
console.log(`Result Is: ${result}`);
console.log(`Reminder 0 means : EVEN, or it is ODD: ${result}`);

var result = num%2==0 ? "EVEN": "ODD";
console.log(`result : ${result}`);
}
isEven(5);
isEven(3456);

// console.log(======= ternary operator =======);

console.log(`=== Number whether the Positive Or negative`);
function isPositive (num){
   var result = num >0 ? "Positive" : "Negative";
   console.log(`Number is Positive Or Negative : ${result}`);

}
isPositive(-5);

 var greterNumber = function greterNumber(n1, n2){
       var result = n1>n2 ? n1 : n2;
       console.log(`The greter value is : ${result}`);
       
}
greterNumber(10, -10);


var isEvenOrOdd = function(num){
    var result = (num%2 == 0) ?true : false;
    console.log(result);
    
    
}
isEvenOrOdd(29);

