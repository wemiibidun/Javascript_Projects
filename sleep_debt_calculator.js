/*In this project I wanted to know if you’re getting enough sleep each week using a sleep debt calculator.

This program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/


const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 7;
  } else if (day === 'Wednesday') {
    return 6;
  } else if (day === 'Thursday') {
    return 5;
  } else if (day === 'Friday') {
    return 4;
  } else if (day === 'Saturday') {
    return 3;
  } else if (day === 'Sunday') {
    return 2;
  } else {
    return "Day Value Error"
  }
};
//To test funtion
//console.log(getSleepHours('saturday'));
const getActualSleepHours = day =>
getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') +
getSleepHours('Sunday');


const getIdealSleepHours = () => {
 const idealHours = 10;
 return idealHours * 7;
};
//To print the sum of all sleep hours in a week
//console.log(getActualSleepHours());
//To test ideal sleep hours that you prefer
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours =getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect ' + (idealSleepHours - actualSleepHours) + ' hour(s) of sleep this week. Good Job!!!');
}
else if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' more hour(s) of sleep than you should this week.');
}
else if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}
else {
  console.log('Not sure')
}
};
//Call the function
calculateSleepDebt()
