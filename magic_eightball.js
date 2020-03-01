//In this project I built the Magic Eight Ball using control flow in JavaScript.

//The user should be able to input a question, then my program will output a random fortune.


var userName = '';
if (userName === "Jane") {
  console.log('Hello Jane');
}
else {
   console.log('Hello');
}
const userQuestion = 'Am I fat?';
console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall='';

if (randomNumber === 0) {
  eightBall = 'It is certain';
  console.log(`The eight ball answered: ${eightBall}`);
}
else if (randomNumber ===  1) {
  eightBall = 'It is decidedly so';
  console.log(`The eight ball answered: ${eightBall}`);
}
else if (randomNumber ===  2) {
  eightBall = 'Reply hazy try again';
   console.log(`The eight ball answered: ${eightBall}`);
}
else if (randomNumber ===  3) {
   eightBall = 'Cannot predict now';
   console.log(`The eight ball answered: ${eightBall}`);
}
else if (randomNumber ===  4) {
   eightBall = 'Do not count on it';
  console.log('Do not count on it');
}
else if (randomNumber ===  5) {
   eightBall = 'Reply hazy try again';
  console.log(`The eight ball answered: ${eightBall}`);
}
else if (randomNumber ===  6) {
   eightBall = 'Outlook not so good';
  console.log(`The eight ball answered: ${eightBall}`);
}
else if (randomNumber === 7) {
   eightBall = 'Signs point to yes';
  console.log(`The eight ball answered: ${eightBall}`);
}
else{
  console.log(`fat lives in you...durhh`);
}
¨
