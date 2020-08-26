//function to get sleep hours
const getSleepHours = (day) => {
  // using a switch statement to define each day and the amount of hours slept. .toLowerCase added to make sure input is read  no matter the capitilization
  switch(day.toLowerCase()) {
    case 'monday':
      return 6
      break;
    case 'tuesday':
      return 6
      break;
    case 'wednesday':
      return 7
      break;
    case 'thursday':
      return 7
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 6
      break;
    case 'sunday':
      return 6
      default:
      return 'Error kemosabi, danger to manifold'
  };
};
// test code
// console.log(getSleepHours('WEDNESDAY'));

//implicit return, no curly brackets or return function used.
const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
//test code
//console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};
//test code
//console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours < idealSleepHours) {
    return 'You need ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep FOOL!!'
  } else if (actualSleepHours === idealSleepHours) {
    return 'You got just enough sleep! Congrats ' + actualSleepHours +" hours"
  } else {
    return 'You got more than enough sleep, you got ' + (actualSleepHours - idealSleepHours) + ' extra hours of sleep. Wake up and do something!'
  }
};

console.log(calculateSleepDebt());
