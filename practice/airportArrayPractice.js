// Airport Array Mock Interview Question
console.log(new Date(2022, 4, 6, 6, 37));

const mainAirport = 'LGA';

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

function airportConnections (mainAirportStr, airportsArr, routesArr) {
  console.log(mainAirportStr);
  console.log(airportsArr);
  console.log(routesArr);

  


}

airportConnections(mainAirport, airports, routes)

// function airportConnections(startPortVal, portsArr, routesArr) {
//   let startPortArr = routesArr.map(function (value) {
//     return value[0];
//   });

//   let endPortArr = routesArr.map(function (value) {
//     return value[1];
//   });

//   startPortArr = [...new Set(startPortArr)];
//   endPortArr = [...new Set(endPortArr)];

//   const chainMapArr = routesArr.map(function (routeArr) {
//     routeArr.unshift(startPortVal);
//     if (routeArr[routeArr.length - 1] === startPortVal) {
//       routeArr.pop();
//     }

//     for (let i = 1; i < routeArr.length; i++) {
//       routesArr.forEach(function (routesArr) {
//         if (routesArr[0] === routeArr[i] && !routeArr.includes(routesArr[1])) {
//           routeArr.push(routesArr[1]);
//         }
//       });
//     }

//     return routeArr;
//   });

//   chainMapArr.sort(function (a, b) {
//     return b.length - a.length;
//   });
// }

// let sPV = startPort;
// let portsArr = airports.slice();
// let routesArr = routes.slice();
// airportConnections(sPV, portsArr, routesArr);
