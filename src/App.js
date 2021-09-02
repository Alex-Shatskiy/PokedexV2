import axios from "axios"
import React, { useState, useEffect } from "react"
import Pokedex from "./Pokedex"

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  // limit=898
  const getAllPokemon = async () => {
    let pokemonArray = []
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
    const results = await res.data.results
    console.log(results)

    for (let i = 0; i < results.length; i++) {
      pokemonArray.push(await getPokemonData(results[i].name))
    }

    setAllPokemon(pokemonArray)
  }

  const getPokemonData = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return res.data
  }

  useEffect(() => {
    getAllPokemon()
  }, [])
  console.log(allPokemon)
  return (
    <div className="App">
      <nav className="navBar">
        <img
          className="icon"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.opiwiki.com%2Fpic%3Fw%3D6%26f%3D111497%26e%3D2%26o%3D703&f=1&nofb=1"
        />
        <h1>Pokedex</h1>
      </nav>
      <section className="pokedex">
        <Pokedex allPokemon={allPokemon} />
      </section>
    </div>
  )
}

export default App
