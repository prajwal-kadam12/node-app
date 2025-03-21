// FUNCTION WITHOUT ANY ARGUMENT OR PARAMETER AND NO RETURN VALUE 
function test(){
  console.log("test");
}
test();

// FUNCTION WITH ANY ARGUMENT OR PARAMETER AND NO RETURN VALUE
function square(num){
    console.log(`finding the square: ${num}`);
    var result = num*num;
    console.log(`Square is : ${result}`);
    
}
 square(5);
 square(19);


//  FUNCTION WITH ANY ARGUMENT OR PARAMETER AND RETURN VALUE
 function addition(n1, n2, n3, n4){
    console.log(`number to add: ${n1}, ${n2},${n3}`)
    var result = n1+n2+n3+n4;
    return result;
 }
  var returnValue = addition(10, 30, 355,90);
 console.log(`Addition Is : ${returnValue}`);

// first way
 function fullName(fName, mName, lName){
     var result = fName.concat(mName).concat(lName);
     return result;
 }
 var returnValue = fullName("Prajwal ","Arun ", "Kadam");
 console.log(`Full Name Is; ${returnValue}`);

//  second wayl
 function fullName(fName, mName, lName){
     var result = fName+mName+lName
    console.log(`The Full Name of the Student Is  ${result}`);
 }
 fullName("prajwal ","Arun ","Kadam");