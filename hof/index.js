// higher order functions 

// .map, .reduce und .filter sind alle Methoden, die in JavaScript-Arrays verwenden können, um zu manipulieren und zu transformieren. 



// .map wird verwendet, um ein neues Array zu erstellen, das aus den Ergebnissen einer Funktion besteht, die auf jedes Element ursprünglichen Arrays angewendet wird. 


const num1 = [1,2,3,4,5];

const numDouple = num1.map(num =>
    {
        return num * 2;
    });

console.log(numDouple);


const words = ['hello','world','javascript'];
const upperCase = words.map(word =>
    {
        return word.toUpperCase();
    });

console.log(upperCase);

const persons = 
[
    {name: 'Max', alter: 25},
    {name: 'Lisa', alter: 30},
    {name: 'Anna', alter: 20}
];

const names = persons.map(person =>
    {
        return person.name + person.alter;
    });

console.log(names);


// .filter() wird verwendet, um ein neues Array zu erstellen, das nur die Elemente enthält, die den Bedingungen in einer Funktion entsprechen.


const num3 = [1,2,3,4,5];

const evenNum = num3.filter(num =>
    {
        return num % 2 === 0;
    }); 

console.log(evenNum);


const wörter = ['hallo', 'welt', 'js', 'node', 'web'];

const longWord = wörter.filter(wort =>
    {
        return wort.length >= 3;
    });

console.log(longWord);



const persons2 = 
[
    {name: 'Max', alter: 25},
    {name: 'Lisa', alter: 30},
    {name: 'Anna', alter: 20},
    {name: 'Tim', alter: 25},
    {name: 'Jan', alter: 30}
];

const personIs25 = persons2.filter(person =>
    {
        return person.alter === 25;
    });

console.log(personIs25);



// .sort() macht als erstes aus einem array ein string und sortiert es dann nach einer logischen reihenfolge 


const num = [74,18,10,5,84,24,105];

console.log(num);


num.sort(compareFunction);

console.log(num);

function compareFunction(a,b)
{
    // 1. <0 ....a comes first
    // 2. 0 .....nothing will be changed
    // 3. >0.....b come first

    return b-a;
};

const products = 
[
    {
        name: "laptop",
        price: 1000,
        rate: 4.3
    },
    {
        name: "desktop",
        price: 1500,
        rate: 3.2
    },
    {
        name: "laptop",
        price: 500,
        rate: 4.8
    },
];

//products.sort((a,b) =>  a.price - b.price ); //---> sortiert vom niedrigsten preis zum höchsten
products.sort((a,b) =>  b.price - a.price ); //---> sortiert vom höchsten preis zum niedrigsten

console.log(products)


// .reduce() wird verwendet, um eine einzelne Wertreduzierung auf alle Elemente des Arrays durchzuführen und das Ergebnis in einer einzelnen Zahl, einem String oder einem anderen Datentyp zurückzugeben. 

//Im Wesentlichen nimmt reduce() ein Array und reduziert es zu einem einzelnen Wert. Es funktioniert, indem es eine Funktion auf jedes Element im Array anwendet und das Ergebnis dieser Funktion auf das nächste Element anwendet, bis das gesamte Array durchlaufen wurde und nur noch ein einzelner Wert übrig bleibt.

// Zum Beispiel:

const num2 =  [1,2,3,4,5];

const sum = num2.reduce((accumulator,current)=>
{
    return accumulator + current;
});

console.log(sum);


const zahlen = [2, 4, 6, 8];
const produkt = zahlen.reduce((akkumulator, aktuellerWert) =>
{
  return akkumulator + aktuellerWert;
});

console.log(produkt);

// In diesem Beispiel wird die Funktion, die an reduce() übergeben wird, jedes Element im Array addieren und das Ergebnis zurückgeben. Der "accumulator" ist der kumulierte Wert, der das Ergebnis der Funktion aus dem vorherigen Schritt enthält, und der "currentValue" ist das aktuelle Element im Array, das in jedem Schritt verarbeitet wird. Am Ende wird die Summe aller Elemente im Array zurückgegeben.



// Arrow function syntax --> initialValue ist optional
// reduce((accumulator, currentValue) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// callback funciton syntax --> initialValue ist optional
// reduce(callbackFn, initialValue)

// Inline callback function --> initialValue ist optional
// reduce(function (accumulator, currentValue) { /* … */ }, initialValue)
// reduce(function (accumulator, currentValue, currentIndex) { /* … */ }, initialValue)
// reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ }, initialValue)