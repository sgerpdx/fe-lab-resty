require('dotenv').config();

export const getPlanets = async () => {
  const res = await fetch(`https://lit-shore-34578.herokuapp.com/planets`);
  const planets = await res.json();

  return planets;
};
