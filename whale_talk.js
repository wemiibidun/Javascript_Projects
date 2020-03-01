//Project involves taking a phrase and translating to whale talk
let input = 'turpentine and turtles';//text to translate to whale talk
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  //console.log(i);count the number of characters in input string
  for (let j = 0; j < vowels.length; j++) {
  //console.log(j);
     if (input[i] == vowels[j]) {
      resultArray.push(input[i]);
    }
    }
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
}
}
console.log(resultArray.join('').toUpperCase());
