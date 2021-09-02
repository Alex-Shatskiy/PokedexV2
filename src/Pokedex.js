import { useEffect, useState } from "react"
import Details from "./Details"
import EachPokemon from "./EachPokemon"

const Pokedex = (props) => {
  const { allPokemon } = props

  const [isOpen, setIsOpen] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState([])

  return (
    <>
      {selectedPokemon == 0 ? (
        <></>
      ) : (
        <Details
          pokemon={selectedPokemon}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      {allPokemon.map((pokemon) => {
        return (
          <EachPokemon
            pokemon={pokemon}
            setSelectedPokemon={setSelectedPokemon}
            setIsOpen={setIsOpen}
          />
        )
      })}
    </>
  )
}

export default Pokedex
