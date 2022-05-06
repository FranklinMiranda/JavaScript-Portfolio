// Airport Array Mock Interview Question
console.log(new Date(2022, 4, 6, 6, 37));

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

function airportConnections(startPortVal, portsArr, routesArr) {
  // Declaring Unique Ending Connections Arr
  let endPortArr = routesArr.map(function (value) {
    return value[1];
  });
  endPortArr = [...new Set(endPortArr)];
  console.log(endPortArr);
  // Route Chain Mapper Function
  const chainMapArr = routesArr.map(function (routeArr, i) {
    // Adding Starting Airport to start of Every Route, then poping it off the end of any route that currently has it
    routeArr.unshift(startPortVal);
    if (routeArr[routeArr.length - 1] === startPortVal) {
      routeArr.pop();
    }
    // Adding the next airport along the chain for every route in the routesArr
    for (let i = 1; i < routeArr.length; i++) {
      // Iterating over the routesArr to add the next connection for every airportVal in the Chain Map Arr
      routesArr.forEach(function (routesArr) {
        if (routesArr[0] === routeArr[i] && !routeArr.includes(routesArr[1])) {
          routeArr.push(routesArr[1]);
        }
      });
    }

    return routeArr;
  });
  // Sorting Chain Map Array by length descending
  chainMapArr.sort(function (a, b) {
    return b.length - a.length;
  });
  console.log(chainMapArr);
}

airportConnections(startingAirport, airports, routes);
