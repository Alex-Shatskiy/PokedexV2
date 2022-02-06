import axios from "axios"
import React, { useState, useEffect } from "react"
import Pokedex from "./Pokedex"

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [filter, setFilter] = useState("")
  // limit=898
  const getAllPokemon = async () => {
    let pokemonArray = []
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=500")
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
          src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Download-Image.png"
        />
        <h1>Pokedex</h1>
        <div className="search">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fmetro%2F1600%2Fsearch.png&f=1&nofb=1" />
          <input onChange={handelSearchChange}></input>
        </div>
      </nav>
      <section className="pokedex">
        {allPokemon.length == 0 ? (
          <>
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          </>
        ) : (
          <Pokedex search={filter} allPokemon={allPokemon} />
        )}
      </section>
    </div>
  )
}

export default App
