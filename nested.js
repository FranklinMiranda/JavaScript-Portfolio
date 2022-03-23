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
    },
    venus: {
      info: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.",
      type: "terrestrial planet",
      position: 3,
      distance: 67,
    },
    earth: {
      info: "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
      type: "terrestrial planet",
      position: 4,
      distance: 93,
    },
    mars: {
      info: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.",
      type: "terrestrial planet",
      position: 5,
      distance: 142,
    },
    ceres: {
      info: "Ceres is a dwarf planet in the asteroid belt between the orbits of Mars and Jupiter.",
      type: "dwarf planet",
      position: 6,
      distance: 257,
    },
    jupiter: {
      info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
      type: "gas giant",
      position: 7,
      distance: 484,
    },
    saturn: {
      info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.",
      type: "gas giant",
      position: 8,
      distance: 886,
    },
    uranus: {
      info: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus.",
      type: "ice giant",
      position: 9,
      distance: 1800,
    },
    neptune: {
      info: "Neptune is the eighth and farthest-known Solar planet from the Sun.",
      type: "ice giant",
      position: 10,
      distance: 2800,
    },
    pluto: {
      info: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune.",
      type: "dwarf planet",
      position: 11,
      distance: 3670,
    },
  };

alert(JSON.stringify(Object.keys(locations[travelLocation])))
alert(JSON.stringify(Object.values(locations[travelLocation])))
alert(JSON.stringify(Object.values(locations[travelLocation])[2]))
