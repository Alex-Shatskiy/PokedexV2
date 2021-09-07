import axios from "axios"
import React, { useState, useEffect } from "react"
import Pokedex from "./Pokedex"

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [filter, setFilter] = useState("")
  // limit=898
  const getAllPokemon = async () => {
    let pokemonArray = []
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
    const results = await res.data.results

    for (let i = 0; i < results.length; i++) {
      pokemonArray.push(await getPokemonData(results[i].name))
    }

    setAllPokemon(pokemonArray)
  }

  const getPokemonData = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return res.data
  }

  const handelSearchChange = (evt) => {
    setFilter(evt.target.value)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <div className="App">
      <nav className="navBar">
        <img
          className="icon"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.opiwiki.com%2Fpic%3Fw%3D6%26f%3D111497%26e%3D2%26o%3D703&f=1&nofb=1"
        />
        <h1>Pokedex</h1>
        <div className="search">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fmetro%2F1600%2Fsearch.png&f=1&nofb=1" />
          <input onChange={handelSearchChange}></input>
        </div>
      </nav>
      <section className="pokedex">
        <Pokedex search={filter} allPokemon={allPokemon} />
      </section>
    </div>
  )
}

export default App
