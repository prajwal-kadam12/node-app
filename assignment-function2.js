var greaterNumber = function(n1, n2){
       var result = n1>n2 ? n1 : n2;
       console.log(`The Greter Number Is : ${result}`);      
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("=========== Even Or Odd ==========");

var isEvenOrOdd = function(num){
       var number = num;
       var result = num%2==0 ? "Even": "Odd";  // Fix: 'Even' and 'Odd' are now strings;
       console.log(`The given number ${number} is: ${result}`);
       
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);

console.log("============ Word Is Even Or Odd ===========");

var wordLength = function(word){
       var wordLength = word;
       var resultLength = word.length;
       var result = word.length%2==0 ? "Even" : "Odd";
       console.log(`The Given Word is ${wordLength} : ${result}`);
       
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");