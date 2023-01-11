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
