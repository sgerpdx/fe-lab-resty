//require('dotenv').config();

const URL = 'https://lit-shore-34578.herokuapp.com';

export const getPlanets = async (URL) => {
  const res = await fetch(`${URL}/planets`);
  const planets = await res.json();

  return planets;
};

//following the MDN docs, but may not need all this info:
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export const postPlanet = async (URL, newPlanet) => {
  const res = await fetch(`${URL}/planets`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newPlanet),
  });
  return res.json();
};
