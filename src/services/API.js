const URL = 'https://lit-shore-34578.herokuapp.com';

export const getPlanets = async (URL) => {
  const res = await fetch(`${URL}`);
  const data = await res.json();

  return data;
};

export const postPlanet = async (URL, newPlanet) => {
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: newPlanet,
  });
  return res.json();
};

export const updatePlanet = async (URL, alteredPlanet) => {
  console.log('///AP', alteredPlanet);
  console.log('TYPE', typeof alteredPlanet);
  const res = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: alteredPlanet,
  });
  return res.json();
};

export const deletePlanet = async (URL) => {
  const res = await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return res.json();
};

// data model for new or updated planet JSON:
// {
//   "planet": "Zorgland",
//   "planet_type": "terrestrial",
//   "diameter": 38,
//   "gravity": "1.3",
//   "magnetic_field_strong": true,
//   "owner_id": 1,
//   "type_id": 1
// }
