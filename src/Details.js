import Modal from "react-modal"
import { BiArrowBack } from "react-icons/bi"
import TabContainer from "./TabContainer/TabContainer"
import { upperCase } from "./utility"

import "animate.css"

const Details = (props) => {
  const { isOpen, setIsOpen, pokemon } = props
  console.log(props)

  const closeModual = () => setIsOpen(false)

  const overlay = () => {
    setIsOpen(true)
  }

  const photoChecker = (pokemon) => {
    if (pokemon.id < 650) {
      return (
        <img
          className="pokemon-imgs"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        ></img>
      )
    } else {
      return <img id="smallImage" src={pokemon.sprites.front_default}></img>
    }
  }

  return (
    <>
      <Modal
        className={`Modal type-${pokemon.types[0].type.name}  `}
        overlayClassName="Overlay"
        isOpen={isOpen}
      >
        <div className="basicDetails">
          <div className="back">
            <BiArrowBack onClick={() => closeModual()} size="40px" />
          </div>
          <div className="top">
            <div className="id-container">
              <span className="id">#{pokemon.id}</span>
            </div>
            <div className="name-types">
              <h2>{upperCase(pokemon.name)}</h2>
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
            {photoChecker(pokemon)}
          </div>
        </div>
        <div className="modalContainer">
          <TabContainer pokemon={pokemon} />
        </div>
      </Modal>
    </>
  )
}

export default Details
