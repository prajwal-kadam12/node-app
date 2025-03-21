
const employee = `{
   "name": "Aleix Melon",
   "id": "E00245",
   "role": ["Dev", "DBA"],
   "age": 23,
   "DOJ": "11-12-2019",
    "married": false,
    "address":{
       "Street":"32, Laham St.",
       "city": "Innsbruck",
       "countery": "Austria"
    },
    "refferred by": "E00245"
}`;

console.log("============= As it is Convert in Onet to Object ===============");
const employeeObj = JSON.parse(employee);
console.log(employeeObj);

console.log("===========log on console role - Dev ==========");
console.log(employeeObj.role[0]);

console.log("========= Log Only Last Name - Melon ============");
console.log(employeeObj.name.split(" ")[1]);

console.log("============ log the joining year of the employee - 2019 ==============");
console.log(employeeObj.DOJ.split("-")[2]);