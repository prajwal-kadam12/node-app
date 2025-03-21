let array = [1,2,3,4,5,6,7]
let arreySet = [];
array.forEach((element) => {
    if (element%2==0) {
        console.log(element);
        arreySet.push(element);
    }
});