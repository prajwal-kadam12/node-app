let professor = {
    fName : "Jenny",
    lName : "Gates",
    age : 54,
    collage : "Government Collage of Engineering Pune",
    subject : "Maths",
    degree : {
        Engineering : "CSE",
        PHD : "Adv Computing",
        MTech : "CSE"
    }
}
const professorJsonString = JSON.stringify(professor);
console.log(professorJsonString);



console.log("============= JSON to Object ===============");
const employee = `{
    "employee_id": 1,
    "name": "Jenny",
    "isMarried": true,
    "skill": ["java","HTML","Css","React"],
    "adderss": {
        "FlatNo": 121321,
        "Floor": 123,
        "Street": "Wakad",
        "City": "pune"
    }
}`;
console.log(typeof employee);
const employeeObj = JSON.parse(employee);
console.log(employeeObj);
console.log(employeeObj.adderss.city);