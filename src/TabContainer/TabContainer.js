import { useState } from "react"
import Pokemonetails from "./Tabs/PokemonDetails"
import "./Tabs.css"
import PokemonDetails from "./Tabs/PokemonDetails"
import Stats from "./Tabs/Stats"
import Evolution from "./Tabs/Evolution"

const TabContainer = (props) => {
  const { pokemon } = props
  const [activeTab, setActiveTab] = useState(1)

  const setTabs = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <div className="tab-container">
        <div className="bloc-tab">
          <div
            onClick={() => setTabs(1)}
            className={activeTab === 1 ? "tab active-tab" : "tab"}
          >
            About
          </div>
          <div
            onClick={() => setTabs(2)}
            className={activeTab === 2 ? "tab active-tab" : "tab"}
          >
            Stats
          </div>
        </div>
        <div className="content-tab">
          <div
            className={activeTab === 1 ? "content active-content" : "content"}
          >
            <PokemonDetails
              height={pokemon.height}
              abilities={pokemon.abilities}
              weight={pokemon.weight}
              exp={pokemon.base_experience}
            />
          </div>

          <div
            className={activeTab === 2 ? "content active-content" : "content"}
          >
            <Stats stats={pokemon.stats} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TabContainer
