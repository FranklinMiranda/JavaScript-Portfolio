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

// Find minimum number of airports needed to connect to LGA to have full coverage of all airports
const airportsToConnectToLGA = [];

const startPoints = [];

function startingPoint(route) {
  if (!startPoints.includes(route[0])) {
    startPoints.push(route[0]);
  }
}
routes.map(startingPoint);
console.log(startPoints);

function allConnections(startPoint, index, startPoints) {
  const connectionsArray = [];
  connectionsArray.push(startPoint);
  console.log(connectionsArray);

  for (let route of routes) {
    console.log(route[0])
    if (route[0] === connectionsArray[0] && !connectionsArray.includes(route[1])) {

      connectionsArray.push(route[1]);
    }
  }
  console.log(connectionsArray);
}
startPoints.forEach(allConnections);
