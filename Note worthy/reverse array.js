// Write your code here:
// creating a fuction to reverse array
const reverseArray = (sentence) => {
    //making new array to receive old array reversed
    const newArray = [];
    /// for loop that iterates through sentence array from the last position to 0, each time updating newArray with push
   for (let i = sentence.length - 1; i >=0; i--) {
     newArray.push(sentence[i]);
   }
   return newArray;
  };
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
   
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  
  
  