//require('dotenv').config();

const URL = 'https://lit-shore-34578.herokuapp.com';

export const getPlanets = async (URL) => {
  const res = await fetch(`${URL}`);
  const data = await res.json();

  return data;
};

//following the MDN docs, but may not need all this info:
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export const postPlanet = async (URL, newPlanet) => {
  console.log('NEWPLANET', newPlanet);
  console.log(typeof newPlanet);
  const res = await fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: newPlanet,
  });
  console.log('RES', res);
  console.log(typeof res);
  return res.json();
};

// {
//   "planet": "Zorgland",
//   "planet_type": "terrestrial",
//   "diameter": 38,
//   "gravity": "1.3",
//   "magnetic_field_strong": true,
//   "owner_id": 1,
//   "type_id": 1
// }
