//const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

  
const justCoolStuff = (arg1, arg2) => {
    const sameWords = (item) => {
      for(let i = 0; i < arg2.length; i++) {
        if (arg2[i] === item){
          return true
        }
      };
  
    };
    return arg1.filter(sameWords);
  };
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))