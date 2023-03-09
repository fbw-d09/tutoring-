console.clear()
// operators
 
let paki1887 = 200;
const imad = 2 ;

paki1887 += imad ;  // paki1887 = paki1887 + imad ;
console.log (paki1887);

paki1887 -= imad ;  // paki1887 = paki1887 - imad ;
console.log (paki1887);

const int4 = 8 ;
const int5 = '8' ;

//  ||  = Oder  
if ( int4 < int5 || int4 == int5 ) console.log ('true'); 
else console.log('false')

// && = Und         != bedeutet ungleich 
if ( int4 < int5 && int4 != 0 ) console.log ('true'); 
else console.log('false')


let i = 0 ;
i++; // i = i + 1  
i += 1  // i = i + 1 
console.log (i);

let j = 2 ;
j-- ; // j = j - 1 
j -= 1 // j = j - 1 
console.log( j) ;



// === vergleicht sowohl den Wert als auch Datentyp

if ( int4 === int5 ) console.log ('true'); 
else console.log ('false');

// == vergleicht nur den Wert

if ( int4 == int5 ) console.log ('true'); 
else console.log ('false');

// if-ternary

const dci = 15 ;
const webDev = (dci < 15 ) ? 'webDev ist größer als DCI' 
: ( dci > 15 ) ? ' webDev ist kleiner als DCi' :null; // null 
console.log ( webDev) ;  

if ( dci < 15 )
{
    console.log ( 'webDev ist größer als DCI') ;
}
else 
{
    console.log ( ' webDev ist kleiner als DCi') ;
}
//for loops 

