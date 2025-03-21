function dreamJob(isGotPlacement){
    if (isGotPlacement) {
        console.log("I will buy clothes for my Family");
        var isMNC = true;
        if (isMNC) {
            console.log("I will have US Trip");  
        } else {
            console.log("I will GOA trip");   
        }
    } else {
        console.log('I will one Hanky for me'); 
    }
}
dreamJob(true);

var eligibleForVoting = function(age){
    if (age>=18) {
        console.log("eligible for voting");  
    } else {
        console.log("Note Eligile for Voting");
    }
}
eligibleForVoting(18);


var eligibleForVoting = function(age){
      if (age == 0 || age < 18 || age>=130 || age==null) {
        console.log(`Not Eligible For Voting`);
      } else  {
        if (age>=18) {
            console.log("Eligible For Voting");
            
        } 
      }
}
eligibleForVoting(null);
eligi