const express = require("express");
const {getPokemonStatus,createPokemonStatus,test} = require("../controllers/pokemonController")
const router = express.Router()

router.get("/test",test)
router.get("/",getPokemonStatus)
router.post("/",createPokemonStatus)
module.exports = router