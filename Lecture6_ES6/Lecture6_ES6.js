/*var x =15;
{
    let x = 5;
    console.log(x);
}
console.log(x);*/

// ----------------------------------------------------------------

/*var x = 15;
{
    const x = 5;
    console.log(x);
    x = 6;
    console.log(x);
}
console.log(x);*/

// ----------------------------------------------------------------

// var x = function (x,y)
// {
//     return x+y;
// };
// console.log(x(5,6));

/*const x = (x,y) => x + y;

console.log(x(5,6));*/

//----------------------------------------------------------------

/*const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const q = [...q1,...q2,...q3,...q4];
console.log(q);*/

// ----------------------------------------------------------------

/*const myNumbers  = [1,2,3,4,5,5];
let maxValue = Math.max(...myNumbers);

console.log(maxValue);*/

// ----------------------------------------------------------------

/*const myNumbers = [25,30,40,50,-30];
let sum = 0;
for (let num of myNumbers)
{
    sum = sum+num;
}
console.log(sum);*/

// ----------------------------------------------------------------

/*const name = "MySchool"
let text = "";
for (let ch of name)
{
    text += ch + " ";
}
console.log(text);*/

// ----------------------------------------------------------------

/*const fruits = new Map([["apples", 500], ["bananas", 300 ], ["Mango", 400]]);
console.log(fruits);
console.log(fruits.get("Mango"));*/

// ----------------------------------------------------------------

/*const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("a");

console.log(letters);*/

// ----------------------------------------------------------------

/*class Car 
{
    constructor(name,mfgYear)
    {
        this.name=name;
        this.mfgYear=mfgYear;
    }
}
const myCar1 = new Car("Scorpio",2023);
const myCar2 = new Car("Thar",2024);
console.log(myCar1, myCar2);*/

// ----------------------------------------------------------------

const myFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside the Promise")
            resolve("Success");
        }, 2000);
    });
};

myFunction().then(() => {
    console.log("Resolved");
})
.catch(() => {
    console.log("Rejected");
});

// ----------------------------------------------------------------


