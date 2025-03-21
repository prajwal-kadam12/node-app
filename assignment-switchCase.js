function monthOfYear(month) {
    switch (month) {
        case 1:
            console.log(`Mont: ${month} - January`);
            break;
        case 2:
            console.log(`Mont: ${month} - February`);
            break;
        case 3:
            console.log(`Mont: ${month} - March`);
            break;
        case 4:
            console.log(`Mont: ${month} - April`);
            break;
        case 5:
            console.log(`Mont: ${month} -May`);
            break;
        case 6:
            console.log(`Mont: ${month} - Jun`);
            break;
        case 7:
            console.log(`Mont: ${month} - July`);
            break;
        case 8:
            console.log(`Mont: ${month} - August`);
            break;
        case 9:
            console.log(`Mont: ${month} - September`);
            break;
        case 10:
            console.log(`Mont: ${month} - October`);
            break;
        case 11:
            console.log(`Mont: ${month} - November`);
            break;
        case 12:
            console.log(`Mont: ${month} - December`);
            break;
        default:
            console.log(`Invalid Data ${month}`);
            
            break;
    }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);