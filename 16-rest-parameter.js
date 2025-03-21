function add(...n){
   console.log(n);
   
}
add(10, 20, 30);

function sub(n1, ...n2){
    console.log(n1);
    console.log(n2);   
}
sub(2,3, 4, 5, 6);


function divide(n1, n2){
    console.log(n1/n2);
}
divide(10,5);