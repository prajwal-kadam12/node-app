function stringHandson(){
      var str = "    Hey you are doing good, keep it up  ";
      console.log(`Given sting is : ${str}`);
    console.log(`length of the string is: ${str.length}`);
     var result =str.trim(" ");
     console.log(`after trim: ${result}, Length Of the String is: ${result.length}`);

     console.log(`Total No of Extra Spaces : ${str.length - result.length}`);

     console.log(`First Character: ${result.charAt(0)}, Last character: ${(result.charAt(result.length-1))}`);
     var words = result.split(" ");
     console.log(`Total Words Available In String: ${words},Number of Words Available: ${words.length}`);
     var indexOfGood = result.indexOf("good");
     console.log(`Index Of Result Good: ${indexOfGood}`);
     var substring = result.substring(22);
     console.log(`Substring Starting From 22: ${substring}`);
     var stringEndsWith = result.endsWith("up");
     console.log(`String Ends With up Yes or Not : ${stringEndsWith}`);
     var stringStartWith = result.startsWith("Hey");
     console.log(`String Starts With Hey : ${stringStartWith}`);
     var stringStartWith = result.startsWith("hey");
     console.log(`String Starts With hey : ${stringStartWith}`);     
}
stringHandson();