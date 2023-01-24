// Title : Timing Events with Asynchronous Callbacks
// Date : 1/11/2023
// Author : Franklin Miranda
// Description : setTimeout() and setInterval() can be used with the event loop to time and execute asynchronous operations
// setTimeout() and setInterval() are both methods of the HTML DOM Window object
// clearTimeout() and clearInterval() are used to stop the executions of setTimeout() and setInterval() method respectively

function message() {
  console.log('This is a message');
}

setTimeout(message, 1000);
clearTimeout(setTimeout(message, 1000));

setInterval(message, 1000);
clearInterval(setInterval(message, 1000));

// clearTimeout and clearInterval is used inside setTimeout 


// Debouncing using Date.now() and setTimeout() 
// This function uses Date.now() to measure time elapsed since the triggering of a function before the next function is triggered
function debounce(callback, interval) {
  // ADD CODE HERE
	let invokedTime;
  return () => {
    	if (!invokedTime) {
        invokedTime = Date.now()
        return callback()}
    else if ((Date.now() - invokedTime) < interval) {invokedTime = Date.now()}
    else if ((Date.now() - invokedTime) > interval) {return callback()}
    	
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'