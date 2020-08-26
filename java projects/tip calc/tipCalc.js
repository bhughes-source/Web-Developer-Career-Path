// Write your function here:
const tipCalculator = (quality, total) => {
  switch(quality) {
    case 'bad':
      return total * .05;
    case 'ok':
      return total * .15;
    case 'good':
      return total * .2;
    case 'excellent':
      return total * .3;
    default:
      return total * .18;
  }
}





// Uncomment the line below when you're ready to try out your function
 console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
