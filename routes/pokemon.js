const express = require("express");
const router = express.Router();
const pokemonRepository = require("../repository/pokemon");

// GET pokemon by ID
router.get("/:pokemonId", async (req, res, next) => {
  try {
    const { pokemonId = 1 } = req.params;
    const pokeData = await pokemonRepository.getPokemonById(pokemonId);
    res.status(200).json(pokeData);
  } catch (error) {
    next(error);
  }
});

// GET paginated pokemon
router.get("/", async (req, res, next) => {
  console.log(req.query);
  try {
    const { limit = 10, offset = 0 } = req.query;
    const pokeData = await pokemonRepository.getAllPokemon(limit, offset);
    res.status(200).json(pokeData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
