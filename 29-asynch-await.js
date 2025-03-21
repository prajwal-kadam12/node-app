// Asynch  Keyword
// Await   Keyword

function fetchAPI(){
    let person = {
        name : "jenny",
        age : 21,
        city : "Pune"
    }
    return person;
}
const per = fetchAPI();
console.log(per);

async function fetchAPI(){
    const fullName = "Jenny Gates";
    return fullName;

}
const per1 =  fetchAPI();
console.log(per1);
per1.then((success)=>{
    console.log("Inside then....");
    console.log(success);   
}).catch((failure)=>{
    console.log(failure);
});



async function fetchData(){
    const person = new Promise((success, reject)=>{
        success("======promise fulfilled======");
    });
    return Promise
}
fetchData().then((success)=>{
    console.log(success);
}).catch((failur)=>{
    console.log(failure);
});


function fetchData(){
    return new Promise((resolve, reject)=>{
     resolve("Success Fully Resolve the Data.......");
    });
}
async function main(){
     const proniseResolve  = await fetchData();
     console.log(proniseResolve);
     
}
main();
console.log("End Of The Program..................");
