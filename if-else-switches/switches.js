console.clear();
// switch
 const zahl = 60 ;

 const zahl2 = 51 ;

 const zahl3 = 21 ;

 const result = ( zahl + zahl2 + zahl3 ) / 3 ;  

 console.log(result)


switch (result) {
    case 44:
        console.log (`hello ${result}`);
        break;
    default:
        console.log();
        break;
}

const month = 'november';

switch (month) {
    case 'may':
    case ' december':
    case 'july':
        console.log (`hello ${month}`);
        break;
    default:
        break;
}