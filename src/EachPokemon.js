import { upperCase } from "./utility"

const EachPokemon = (props) => {
  const { pokemon, setIsOpen, setSelectedPokemon } = props

  const photoChecker = (pokemon) => {
    if (pokemon.id < 650) {
      return (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        ></img>
      )
    } else {
      return <img id="smallImage" src={pokemon.sprites.front_default}></img>
    }
  }

  return (
    <div
      onClick={() => setSelectedPokemon(pokemon)}
      className="card"
      key={pokemon.id}
    >
      <div
        onClick={() => setIsOpen(true)}
        className={`card type-${pokemon.types[0].type.name}`}
      >
        <div className="details">
          <span className="id">#{pokemon.id}</span>
          <h2 className="title">{upperCase(pokemon.name)}</h2>
          <div className="types">
            {pokemon.types.map((type, id) => {
              return (
                <>
                  <p className="type" key={id}>
                    {upperCase(type.type.name)}
                  </p>
                </>
              )
            })}
          </div>
        </div>
        <div className="image">{photoChecker(pokemon)}</div>
      </div>
    </div>
  )
}

export default EachPokemon
