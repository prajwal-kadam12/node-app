async function fetchData(){
    const person = new Promise((success, reject)=>{
        setTimeout(()=>{
            resolve("Successfully fetch the data ....")
        }, 5000)
    });
    return Promise
}
async function main(){
    const promiseResolve = await fetchData();
    console.log(promiseResolve);
    console.log("=========Main End========");
}
fetchData().then((success)=>{
    console.log(success);
}).catch((failur)=>{
    console.log(failure);
});



console.log("===== fetch() API =======");
const responseData = await fetch("https://fakestoreapi.com/products");
const products = await responseData.json();
for (const product of products) {
    console.log(`ID: ${product.id}, Title: ${product.title}, Price: ${product.price}, Count: ${product.rating.count}`);
}