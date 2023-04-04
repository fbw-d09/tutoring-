const user1 = 
{
    firstName: "hansi",
    lastName: "weber",
    age: 29,
    plz: "06766",
    birthYear()
    {
        const today = new Date();
        const year = today.getFullYear();
        const result = year - age;

        if (result<year - 18)
        {
            console.log("the user was born in " + result + " and is therefore allowed to buy all types of alcohol");
        }
        else if (result< year- 16)
        {
            console.log("the user was born in " + result + " and is therefore only allowed to buy wine and beer");
        }
        else console.log("the user was born in " + result + " and is not allowed to by alcohol");
        
        return
    },
}

console.log(user1)
console.log(user1.firstName,user1.age);

const {firstName,lastName,age,plz} = user1;
console.log();
console.log(firstName,age);


console.log(user1.birthYear());



const palindrom = "hallo";
const palindrom2= palindrom.split();


console.log(palindrom2);





const test = function (num1,num2)
{

}


function test2 (num1,num2)
{

}

const test3 = (num1,num2) =>
{
    const result = Math.pow(num1,num2);
    return console.log(result);
}
test3(2,5);

let test4 = 7;
let test5 = 0;

for (let i = 1; i <= test4; i++)
{
  
    let sum = test5+=1;
    let sum1 = sum+sum
    console.log(sum1)
}