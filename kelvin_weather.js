/*With my knowledge of JavaScript, I converted Kelvin to Celsius, then to Fahrenheit.
For example, 283 K converts to 10 °C which converts to 50 °F.

*************************/

//This is variable declaration
const kelvin = 0;

//how to convert from Kelvin to Celsius
const celsius = kelvin - 273;

/*how to calculate fahrenheit
let fahrenheit = celsius * (9/5) + 32;*/

//how to convert celsius to Newton
let newton = celsius * (33/100);

//how to round down an element
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);

/*how to round down an element
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);*/
