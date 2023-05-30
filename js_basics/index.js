// basic`s Js part 1 


//variablen let und const
// 
// let  :    verwenden wir wenn wir eine variabele variabel ist das heißt eine let ist überschreibbar bzw man kann 
//           inhalte wieder und wieder verändern sei es löschen oder hinzufügen 
//
//const :    ist eine varibale die man nicht veränder kann sie ist fix und bleibt immer "Constant"

let nameList = ["alf","peter","christian"]; // Variabelenamen schreiben wir immer im camelCase das heißt der anfang des 
                                            // ist immer klein und jedes weiter Wort was beginnt wird dann großgeschrieben 
                                            // ohne Lehrzeichen
//datentypen
//


// const calc = (num1,num2) => 
// {
//     const result = num1 + num2;
//     const result2 = num1 - num2;
//     const result3 = num1 * num2;
//     const result4 = num1 / num2;
//     const result5 = num1 % num2;
//     const result6 = Math.pow(num1,num2);
    
//     return console.log(result,result2,result3,result4,result5,result6);
// }

// calc(2,3);


//methoden
// Math.??? sind methoden mit denen man berechnungen oder zahlen runden kann etc 
// Math.pow erwartet immer 2 zahlen die erste Zahl ist die "grundzahl" und die zweite der "exponent"
console.log(Math.pow(10,));


const mathpow = (num1,num2) =>
{
    const result = Math.pow(num1,num2);
    const result2 = Math.round(result); 
    return console.log(result2);
}

mathpow(2.8,3.6);


// runden von von zahlen kann man mit Math.floor(zum abrunden) Math.ceil(zum aufrunden) und 
// Math.round(zum richtigen runden)















