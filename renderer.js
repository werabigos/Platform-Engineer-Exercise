import {
  characters,
  loadInformation,
  getCharacter,
} from "./functions.js";

const form = document.getElementById("searchForm");
const input = document.getElementById("nameInput");
const loadStatus = document.getElementById("loadStatus");
const searchStatus = document.getElementById("searchStatus");
const result = document.getElementById("result");
const nameList = document.getElementById("nameList");
const vehicleList = document.getElementById("vehicleList");
const characterName = document.getElementById("characterName");

// Format 
function formatLabel(label) {
  const text = label.replaceAll("_", " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Selected character 
function showCharacter(character) {
  result.innerHTML = "";
  characterName.textContent = "";      
  vehicleList.textContent = "";

  if (!character) {
    searchStatus.textContent = "No character found.";
    return;
  }

  searchStatus.textContent = "";

  const { name, vehicles, ...facts } = character;
  characterName.textContent = name;

  for (const [label, value] of Object.entries(facts)) {
    const li = document.createElement("li");
    li.textContent = `${formatLabel(label)}: ${value}`;
    result.appendChild(li);
  }
  vehicleList.textContent = vehicles.length
    ? `Vehicles: ${vehicles.join(", ")}`
    : "Vehicles: none";
}

// Search
form.addEventListener("submit", (event) => {
  event.preventDefault();
  showCharacter(getCharacter(input.value));
});

// Load data
try { 
  await Promise.all([loadInformation("people"), loadInformation("vehicles")]);
  loadStatus.textContent = "";
} catch (e) {
  console.error(e)
  loadStatus.textContent = "Could not load data"
}

// List characters
for (const c of characters) {
  const { name, vehicles, ...facts } = getCharacter(c.name);

  const title = document.createElement("h3");
  title.textContent = name;
  title.addEventListener("click", () => {
    showCharacter(getCharacter(name));
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  nameList.appendChild(title);

  const list = document.createElement("ul");
  for (const [label, value] of Object.entries(facts)) {
    const li = document.createElement("li");
    li.textContent = `${formatLabel(label)}: ${value}`;
    list.appendChild(li);
  }
  nameList.appendChild(list);
}
