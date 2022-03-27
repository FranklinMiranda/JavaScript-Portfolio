// Airport Array Mock Interview Question
// Prompt

const startingAirport = 'LGA';

const airports = [
  'BGI',
  'CDG',
  'DEL',
  'DOH',
  'DSM',
  'EWR',
  'EYW',
  'HND',
  'ICN',
  'JFK',
  'LGA',
  'LHR',
  'ORD',
  'SAN',
  'SFO',
  'SIN',
  'TLV',
  'BUD',
];

const routes = [
  ['DSM', 'ORD'],
  ['ORD', 'BGI'],
  ['BGI', 'LGA'],
  ['SIN', 'CDG'],
  ['CDG', 'SIN'],
  ['CDG', 'BUD'],
  ['DEL', 'DOH'],
  ['DEL', 'CDG'],
  ['TLV', 'DEL'],
  ['EWR', 'HND'],
  ['HND', 'ICN'],
  ['HND', 'JFK'],
  ['ICN', 'JFK'],
  ['JFK', 'LGA'],
  ['EYW', 'LHR'],
  ['LHR', 'SFO'],
  ['SFO', 'SAN'],
  ['SFO', 'DSM'],
  ['SAN', 'EYW'],
];

const airportsToConnectToLGA = [];

function minimumAirports(startingAirport, airports, routes) {
  const flightConnect = routes;

  const startArray = [];
  const endArray = [];
  const startArrayNoDups = [];
  const allConnectionsArray = [];
  const testArray = [startingAirport];

  function optimize0(route, index) {
    startArray.push(route[0]);
    endArray.push(route[1]);

    if (startArrayNoDups.indexOf(startArray[index]) === -1) {
      startArrayNoDups.push(startArray[index]);
    }

    route.unshift(startingAirport);
    route.pop();
  }
  flightConnect.forEach(optimize0);

  function optimize1(route, index) {
    if (!route.includes(endArray[index]) === true) {
      route.push(endArray[index]);
    }
  }
  flightConnect.forEach(optimize1);

  function optimize2(route) {
    function repeat() {
      function optimize3(connection) {
        for (let i = 0; i < startArray.length; i++) {
          if (connection === startArray[i] && route.indexOf(endArray[i]) === -1) {
            route.push(endArray[i]);
          }
        }
      }
      route.forEach(optimize3);
    }
    repeat();
    repeat();
    repeat();
    repeat();
    repeat();
  }
  flightConnect.forEach(optimize2);

  function optimize4(route) {
    route.shift();
  }
  flightConnect.forEach(optimize4);

  console.log(flightConnect);

  function optimize5(start) {
    const allConnections = [start];

    function optimize6(route) {
      function optimize7(connection) {
        if (start === route[0] && allConnections.indexOf(connection) === -1) {
          allConnections.push(connection);
        }
      }
      route.forEach(optimize7);
    }
    flightConnect.forEach(optimize6);
    allConnectionsArray.push(allConnections);
  }
  startArrayNoDups.forEach(optimize5);

  function optimize8(route) {
    route.unshift(startingAirport);
  }
  allConnectionsArray.forEach(optimize8);

  allConnectionsArray.sort(function (a, b) {
    return b.length - a.length;
  });

console.log(allConnectionsArray)





}
minimumAirports(startingAirport, airports, routes);
