const fetch = require("node-fetch");

const getAllPokemon = async (limit, offset) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const json = await res.json();
  return json;
};

const getPokemonById = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await res.json();
  return json;
};

module.exports = {
  getAllPokemon,
  getPokemonById,
};
