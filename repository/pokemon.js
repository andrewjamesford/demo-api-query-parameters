const fetch = require('node-fetch');

const getAllPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  const json = await res.json();
  return json;
};

module.exports = {
  getAllPokemon,
};
