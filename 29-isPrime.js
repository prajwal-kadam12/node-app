function isPrime(num) {
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      return false;
    }
  }
  return true;
}
var result = isPrime(7);
console.log(`Is 7 is Prime Number: ${result}`);

var result = isPrime(15);
console.log(`Is 15 is Prime Number: ${result}`);



const array = [6, 7, 5, 9, 11];
let PrimeCount = 0;
for (const element of array) {
    const element = array[index];
    
}