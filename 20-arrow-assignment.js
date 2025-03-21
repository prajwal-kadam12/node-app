let show = () =>{
    console.log( "Good Morning, Today is Wednesday");
}
show();
let mul = (n1, n2, n3= 1)=>{
     let result = n1*n2*n3;
     console.log(`Multiplication Is: ${result}`);
}
mul(5, 5, 2)
mul(10, 4)

let Addition = (n1, n2, n3, n4, n5) =>{
    let result = n1 + n2+ n3 + n4 + n5;
    console.log(`Addition Is : ${result}`);
    
}
Addition(100, 100, 200, 349, 756);
Addition("I am"," learning"," ES6", " features", " in depth");