const summe = (sum1, sum2) => 
{
    const result = Math.pow(sum1,sum2);
    console.log(result);
}

summe(2,10);


let name = ['hansi','hussi','Behzad','Yan','Jana','Melanie','<Roman>','Dirk.k','rick'];
name.push('Hallo'); // Fügt ein String am ende hinzu
name.unshift('Oleg');// Fügt ein String an den Anfang hinzu
name.shift(); // löscht den ersten Eintrag
console.log(name.includes('rick')); //prüft ob eine Zeichenfolge in einem Array oder String da ist :D 

console.log
//          (index für splice zum schneiden)
name.splice(name.indexOf('<Roman>'),1);
// firstNames.splice(8,1);

console.table(name);

let name2 = ['osdgfosg','hussi','Behzad','Yan','Jana','Melanie','<Roman>','Dirk.k','rick'];

const name3 = name.concat(name2);
console.table(name3);

console.log("hallo welt es ist heute echt ein kack wetter".split(" "));
// .split("") macht jeden buchstaben im satz/wort zu einem Array 
// .split(" ") macht jedes Wort im String zu einem Array

const fruits = [ 'Orange', 'Apple', 'Strawberry' ];

// Wir rufen .forEach(); als methode für die array auf, .forEach(); liefert uns für jedes element in der array einen funktionsaufruf.
fruits.forEach(function(fruit, i)
{
    console.log('Frucht nummer: ' + i, 'Frucht name: ' + fruit);
});
