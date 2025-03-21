function isPrime(num) {
    if (num < 2) return false; // Handle numbers less than 2
    for (let index = 2; index < num; index++) {
      if (num % index === 0) {
        return false;
      }
    }
    return true;
  }
  
  [3, 9, 7, 6, 19, 29, 53].forEach(num => {
    console.log(`${num} is ${isPrime(num) ? 'Prime' : 'Not Prime'}`);
  });


  

console.log("============================ Space Count from the String ==================================");


  function spaceCount(str) {
    let count = 0;
    for (let char of str) {
      if (char === ' ') {
        count++;
      }
    }
    return count;
}
  console.log(`Spaces in "Revision is the mother of success": ${spaceCount("Revision is the mother of success")}`); // Output: 5
  console.log(`Spaces in "JavaScript is the language of internet world": ${spaceCount("JavaScript is the language of internet world")}`);