export const characters = [];
export const vehicles = [];
const lists = { people: characters, vehicles: vehicles };

export async function loadInformation(type) {
  const list = lists[type];
  let info = `https://swapi.dev/api/${type}/`;

  while (info) {
    const response = await fetch(info);
    const data = await response.json();
    list.push(...data.results);
    info = data.next;
  }
}
 
export function getCharacter(name) {
  if (typeof name !== "string") return null;

  name = name.trim().toLowerCase();
  const match = characters.find((c) => c.name.toLowerCase() === name);

  if (!match) return null;

  const result = {
    name: match.name,
    birth_year: match.birth_year,
    height: match.height,
    mass: match.mass,
    hair_color: match.hair_color,
    eye_color: match.eye_color,
    vehicles: getVehicles(match),
  };

  return result;
}

export function getVehicles(character) {
  return vehicles
    .filter((c) => character.vehicles.includes(c.url))
    .map((b) => b.name);
}

