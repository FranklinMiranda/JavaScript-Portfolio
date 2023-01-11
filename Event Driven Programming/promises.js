// Title : Promise Objects
// Date : 1/11/2023
// Author : Franklin Miranda
// Description : Promise Objects are used to represent the eventual completion or failure of a asynchronous operation. Callbacks are attached to promise objects,
// instead of passing the callback into a function
// Promises used .then(), .catch(), and .finally() to attach callbacks to the promise object
// .then()  appends fulfillment handler callbacks and returns a new promise object and can be used for promise chaining
// .catch() appends a rejection handler callback to the promise and also returns a new promise
// .finally() appends a handler to the promise and returns a new promise object when the original promise object is fulfilled

// Promise objects have three states, Pending, Fulfilled, and Rejected

const BASE_URL = 'https://ghibliapi.herokuapp.com/';

const promise = fetch(BASE_URL);
promise
  .then((response) => {
    return response.json();
  })
  .then((people) => {
    console.log(people);
  });
