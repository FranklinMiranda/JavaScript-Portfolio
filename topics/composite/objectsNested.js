// Nested Objects
console.log(new Date())

const locations = {
  sun: {
    info: "The Sun is the star at the center of the Solar System.",
    type: "star",
    position: 0,
    distance: 0,
  },
  mercury: {
    info: "Mercury is the smallest planet in the Solar System and the closest to the Sun.",
    type: "terrestrial planet",
    position: 1,
    distance: 36,
    mercuryLocations: ["north pole", "south pole", "equator", "highest point", "lowest point"],
  },
  venus: {
    info: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.",
    type: "terrestrial planet",
    position: 3,
    distance: 67,
    venusLocations: { northpole: 100, southpole: 0, equator: 50, highestPoint: 75, lowestPoint: 25 },
  },
};

const nestedItem = {
  name: {
    namename: {
      namenamename: [
        { name1: "Franklin", age: 23 },
        { height: 75, weight: 195 },
      ],
    },
  },
};

unNest();
function unNest() {
  let numbers = [];
  numbers.push(nestedItem.name.namename.namenamename[0].age);
  numbers.push(nestedItem["name"]["namename"]["namenamename"][1]["height"]);
  numbers.push(nestedItem.name.namename.namenamename[1].weight);
  console.log(numbers);
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }
  console.log(result);
}

dotNotation();
function dotNotation() {
  console.log(locations.sun.info);
  console.log(locations.sun.type);
  console.log(locations.sun.position);
  console.log(locations.sun.distance);

  console.log(locations.mercury.info);
  console.log(locations.mercury.type);
  console.log(locations.mercury.position);
  console.log(locations.mercury.distance);
  console.log(locations.mercury.mercuryLocations[0]);
  console.log(locations.mercury.mercuryLocations[1]);
  console.log(locations.mercury.mercuryLocations[2]);
  console.log(locations.mercury.mercuryLocations[3]);
  console.log(locations.mercury.mercuryLocations[4]);

  console.log(locations.venus.info);
  console.log(locations.venus.type);
  console.log(locations.venus.position);
  console.log(locations.venus.distance);
  console.log(locations.venus.venusLocations.northpole);
  console.log(locations.venus.venusLocations.southpole);
  console.log(locations.venus.venusLocations.equator);
  console.log(locations.venus.venusLocations.highestPoint);
  console.log(locations.venus.venusLocations.lowestPoint);
}

bracketNotation();
function bracketNotation() {
  console.log(locations["sun"]["info"]);
  console.log(locations["sun"]["type"]);
  console.log(locations["sun"]["position"]);
  console.log(locations["sun"]["distance"]);

  console.log(locations["mercury"]["info"]);
  console.log(locations["mercury"]["type"]);
  console.log(locations["mercury"]["position"]);
  console.log(locations["mercury"]["distance"]);
  console.log(locations["mercury"]["mercuryLocations"][0]);
  console.log(locations["mercury"]["mercuryLocations"][1]);
  console.log(locations["mercury"]["mercuryLocations"][2]);
  console.log(locations["mercury"]["mercuryLocations"][3]);
  console.log(locations["mercury"]["mercuryLocations"][4]);

  console.log(locations["venus"]["info"]);
  console.log(locations["venus"]["type"]);
  console.log(locations["venus"]["position"]);
  console.log(locations["venus"]["distance"]);
  console.log(locations["venus"]["venusLocations"]["northpole"]);
  console.log(locations["venus"]["venusLocations"]["southpole"]);
  console.log(locations["venus"]["venusLocations"]["equator"]);
  console.log(locations["venus"]["venusLocations"]["highestPoint"]);
  console.log(locations["venus"]["venusLocations"]["lowestPoint"]);
}

mixAndMatch();
function mixAndMatch() {
  console.log(locations["sun"].info);
  console.log(locations.sun["type"]);
  console.log(locations["sun"]["position"]);
  console.log(locations["sun"]["distance"]);

  console.log(locations["mercury"]["info"]);
  console.log(locations["mercury"]["type"]);
  console.log(locations["mercury"]["position"]);
  console.log(locations["mercury"]["distance"]);
  console.log(locations["mercury"].mercuryLocations[0]);
  console.log(locations["mercury"]["mercuryLocations"][1]);
  console.log(locations.mercury["mercuryLocations"][2]);
  console.log(locations["mercury"]["mercuryLocations"][3]);
  console.log(locations["mercury"]["mercuryLocations"][4]);

  console.log(locations["venus"]["info"]);
  console.log(locations["venus"]["type"]);
  console.log(locations["venus"]["position"]);
  console.log(locations["venus"]["distance"]);
  console.log(locations.venus["venusLocations"]["northpole"]);
  console.log(locations.venus.venusLocations["southpole"]);
  console.log(locations["venus"]["venusLocations"].equator);
  console.log(locations["venus"]["venusLocations"]["highestPoint"]);
  console.log(locations.venus["venusLocations"].lowestPoint);
}

objectKeys();
function objectKeys() {
  console.log(Object.keys(locations));
  console.log(Object.keys(locations)[0]);
  console.log(Object.keys(locations)[1]);
  console.log(Object.keys(locations)[2]);
  console.log(Object.keys(locations.sun));
  console.log(Object.keys(locations["mercury"]));
  console.log(Object.keys(locations["mercury"].mercuryLocations));
  console.log(Object.keys(locations.venus));
  console.log(Object.keys(locations.venus.venusLocations));
}

objectValues();
function objectValues() {
  console.log(Object.values(locations));
  console.log(Object.values(locations)[0]);
  console.log(Object.values(locations.sun)[0]);
  console.log(Object.values(locations["mercury"]));
  console.log(Object.values(locations["mercury"].mercuryLocations));
  console.log(Object.values(locations.venus));
  console.log(Object.values(locations.venus.venusLocations));
}

console.log(locations.venus.distance * locations.mercury.distance);
console.log(locations.venus.distance * Object.values(locations.mercury)[3]);

console.log(JSON.stringify(Object.keys(locations)[0]));
console.log(JSON.stringify(Object.values(locations["venus"]["venusLocations"])[4]));
