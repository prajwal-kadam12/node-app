function outer (){
    let inner = function(){
       console.log(`inside inner function `);
       
    }
    return inner;
}
var result = outer();
result();

var globalvariable = 100;
function outer (){
    let outerFunctionVariable = 200;
    let inner = function(){
        let innerFunctionVariable = 300;
       console.log(innerFunctionVariable);
       console.log(outerFunctionVariable);
       console.log(globalvariable);  
    }
    return inner;
}
var result = outer();
result();

