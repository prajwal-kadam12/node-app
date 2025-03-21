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
    // Certificate : ["Hacker Rank Participation","Certification in IFE Course" ],
    
}
console.log("=======Task 1 =======");
console.log(professor);


console.log("==================== Task 2 =====================");
console.log(professor.degree);


console.log("==================== Task 3 =====================");
professor.Certificate = ["Hacker Rank Participation","Certification in IFE Course" ] ;
console.log(professor.Certificate);


console.log("=========Task 5 ===========");
professor.totalExperience = "14 Year";
console.log(professor);

console.log("==========Task 6 ==========");
professor.fName = "Prajwal";
professor.collage = "Genba Sopanrao Moze Collage Of Engineering Balewadi";
professor.age = 21;
professor.subject = "Information Technology";
console.log(professor);

console.log("=========== Task 7 ============");
professor.Certificate.splice(2, 0, "Oracle Certificate");
console.log(professor.Certificate);


console.log("==========Task 8 ===========");
console.log(`last Element In The Certificate : ${professor.Certificate[professor.Certificate.length - 1]}`);



console.log("==========Task 9 ===========");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key} ==>${element}`);
        
    }
}