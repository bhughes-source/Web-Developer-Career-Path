// Write your code here:
// function defined with aliens array as argument
const greetAliens = (aliens) => {
    //for looping through array using index method
    for (i = 0; i < aliens.length; i++) {
      //each case of aliens[i] will call this console.log
      console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
    }
  }
  
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);
  
  