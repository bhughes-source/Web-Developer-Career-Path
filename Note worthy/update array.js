// Write your code here:
const convertToBaby = () => {
    const newArray = [];
    for (i = 0; i < animals.length; i++){
      newArray.push('baby ' + animals[i]);
    }
    return newArray;
  }
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  
  