function jenny(callbacks){
    console.log("=== Jenny went home and have snacks======");
    console.log("===== Jenny started home work preparation =========");
    console.log("==== After 2 hours she have completed her home work =======");
    callbacks();
    return function(){
        console.log("Hey Buddy .. I am Back.......");
    }
}
let elon = function(){
    console.log("******** Elon went home and have snacks ***********");
    console.log("******** Elon went to play match ***********");
    console.log("******** Elon came back and started copying homework ***********");
    console.log("******** Elon Completed his home work ***********");
}

let result = jenny(elon);
result();



const person ={
    fName : "Prajwal Kadam",
    Company : "No Any"
} 
function greeting(message,role){
    console.log(`Hii The ${role}, Mr ${fName} ${greet} ${world}`);
    
}
const call = greeting.call(person, `Good Morning`)
console.log(call);
