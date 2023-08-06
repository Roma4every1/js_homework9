let countries = new Map();
countries.set("Russia", "Moscow");
countries.set("France", "Paris");
countries.set("USA", "Washington");
countries.set("Germany", "Berlin");

function getCapital(country) {
  return countries.get(country);
}

function addCountry(country, capital) {
  countries.set(country, capital);
}

function deleteCountry(country) {
  countries.delete(country);
}

////

let colors = new Set(["red", "green", "blue"]);

function hasColor(color) {
  return colors.has(color);
}

function addColor(color) {
  colors.add(color);
}

function deleteColor(color) {
  colors.delete(color);
}