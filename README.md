## This app is an API tool in the simplified vein of Postman

### Notes:

Information on using fetch with methods other than GET:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

e.g.

```
export const postPlanet = async (URL, newPlanet) => {
  const res = await fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: newPlanet,
  });
  return res.json();
```
