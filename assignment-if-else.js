var voteEligible = function(age){ 
   var Age = age;
   if (age == 0 || age < 18 || age>=130) {
     console.log(`Age ${Age} Not Eligible For Voting`);
   } else  {
     if (age>=18) {
         console.log(`Age ${Age} Eligible For Voting`);    
     } 
     else{
      if (age== null) {
         console.log(`Age ${Age} is not valid data`); 
      } 
     }
   }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(null);


function marrigeEligible(gender, age){
        if (gender == "male" && age>=21) {
          console.log(`Congrats. ji le apani jindagi ${gender}, ${age}`);
        }
        else if (gender == "female" && age>=18) {
          console.log(`congrats girls ${gender}, ${age}`);
          
        }
        else{
          console.log(`nashib futtha hai ${gender}, ${age}`);
          
        }
}
marrigeEligible("male", 35);

function weekDay(dayNum){
     switch (dayNum) {
      case 1:
        console.log(`${dayNum} - Monday`);
        break;
        case 2:
        console.log(`${dayNum} - tue`);
        break;
        case 3:
        console.log(`${dayNum} - wed`);
        break;
        case 4:
        console.log(`${dayNum} - thur`);
        break;
        case 5:
        console.log(`${dayNum} - fri`);
        break;
        case 6:
        console.log(`${dayNum} - saturday`);
        break;
        case 7:
        console.log(`${dayNum} - sunday`);
        break;
      default:
        console.log(`Invalid data: ${dayNum}`);
        
        break;
     }
}
weekDay(3);
