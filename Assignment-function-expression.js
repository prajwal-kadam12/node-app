function squareOfWordLength(str){
           var strLength = str.length;
           console.log(`The Length Of the Given String is : ${strLength}`);
           var squareOfStr = strLength*strLength;
           console.log(`The Square Of it's Length is: ${squareOfStr}`);
           
           
}
squareOfWordLength("javaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");

function stringWord(words){
    var wordLength =  words.length;
    console.log(`The length of the string is : ${wordLength}`);
    var  wordsSplit = words.split(" ");
    console.log(`Number of Words available in Str : ${wordsSplit}, the length oft the split word : ${wordsSplit.length}`);
    var result = wordLength/wordsSplit.length;
    console.log(`Str Divided By the the total Length and Number of Words available in Str : ${result}`);
    var result1 = wordLength*wordsSplit.length;
    console.log(`Str Multiply By the the total Length and Number of Words available in Str : ${result1}`);
}
stringWord("I am UI Developer");