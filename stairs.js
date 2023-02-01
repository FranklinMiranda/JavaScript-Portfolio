function countWaysToReachNthStair(n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  }

  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
}

//console.log(countWaysToReachNthStair(8)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))

/*
Declare a function 'deepCopy' that creates a deep copy of every level of a given object or array, and returns it, no matter deep the object is nested.
Example:
const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools);                                        // -> false
console.log(copyOfTools[0] === tools[0]);                                  // -> false
console.log(copyOfTools[0].editor === tools[0].editor);                    // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);           // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);      // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true
*/

function deepCopy(input, result = input) {
    
  if (Array.isArray(input)) {
    for (let i = 0; i < input.length; i++) {
      result[i] = input[i];

      return deepCopy(input[i], result[i]);
    }
  } else if (typeof input === 'object' && !Array.isArray(input)) {
    
    for (let key in input) {
      result[key] = input[key];
      return deepCopy(input[key], result[key]);
    }
  }
}

const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
// deepCopy(tools);

   const copyOfTools = deepCopy(tools);
   console.log(JSON.stringify(copyOfTools))
//    console.log(copyOfTools === tools);                                        // -> false
//    console.log(copyOfTools[0] === tools[0]);                                  // -> false
//    console.log(copyOfTools[0].editor === tools[0].editor);                    // -> false
//    console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);           // -> false
//    console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);      // -> false
//    console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true
