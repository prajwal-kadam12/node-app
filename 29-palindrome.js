function isPalindrome(str) {
    const strReverse = str.split("").reverse().join("");
if (str == strReverse) {
    console.log(`Given String is : ${str}`);
    console.log("The Given Number are palindrome....");
}
else{
    console.log(`Given String is : ${str}`);
    console.log("The Given Number are not palindrome....");
}
console.log("---------------------------------");
}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");