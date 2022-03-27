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

const fullChain = routes;
const startArray = [];
const endArray = [];

for (let i = 0; i < fullChain.length; i++) {
  console.log(fullChain[i][0]);
  startArray.push(fullChain[i][0]);
  console.log(fullChain[i][1]);
  endArray.push(fullChain[i][1]);
}

console.log(startArray);
console.log(endArray);

function nextLeg(route, index, routes) {
  console.log(endArray);
  console.log(route[0]);

  for (let i = 0; i < endArray.length; i++) {
    if (route.includes(startArray[i]) === true && !route.includes(endArray[i]) === true) {
      route.push(endArray[i]);
    }
  }
}
fullChain.forEach(nextLeg);

console.log(fullChain);

function consolidate(route, index, routes) {
  console.log(route);

  for (let i = 0; i < fullChain.length; i++) {
    if (route[0] === fullChain[i][0]) {
      for (let j = 0; j < route.length; j++) {
        if (!fullChain[i].includes(route[j])) {
          fullChain[i].push(route[j]);
        }
      }
    }
  }
}
fullChain.forEach(consolidate);

console.log(fullChain);

const startArrayNoDups = [];
const startPointArrayNoDups = [];
function noDups(oneChain, index, fullChain) {
  if (!startArrayNoDups.includes(oneChain) === true && !startPointArrayNoDups.includes(oneChain[0]) === true)
    startArrayNoDups.push(oneChain);
  startPointArrayNoDups.push(oneChain[0]);
}
fullChain.forEach(noDups);

console.log(startArrayNoDups);
