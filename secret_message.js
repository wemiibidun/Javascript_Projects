//Using array methods, I transformed an array of strings into a secret message!
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();//To remove last string of an array
secretMessage.length;//To check the length of the array
secretMessage.push('to', 'Program');//To add words to the array
secretMessage[7] = 'right';//To replace an array
const firstString = secretMessage.shift();//To remove the first string in an array
secretMessage.unshift('Programming');//To add string to an array
secretMessage.splice(6, 5, 'know');//How to remove strings and replace with single string. The first array is the number/position to start. The second array is the amount to remove and the last is replacement
//console.log(secretMessage);
console.log(secretMessage.join(' '));
