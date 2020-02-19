//Declaring my Age
const myAge = 31;

//Declaring early years
let earlyYears = 2;
earlyYears = earlyYears*10.5;
//earlyYears *= 10.5;

//number of years accounted for by later years
var laterYears = (myAge-2)*4;
/*console.log(earlyYears);
console.log(laterYears);*/

//add later plus early
var myAgeInDogYears = earlyYears+laterYears;

//writing name as a string to return all lowercase

var myName = 'Wemimo'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
