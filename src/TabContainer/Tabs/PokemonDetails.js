const PokemonDetails = (props) => {
  const { height, abilities, weight, exp } = props

  const eachAbilitie = abilities
    .map((t) => {
      return t.ability.name.replace("-", " ")
    })
    .join(", ")

  return (
    <>
      <table className="about-table">
        <tbody>
          <tr>
            <td className="about-name">Exp: </td>
            <td className="about-data">{exp}</td>
          </tr>
          <tr>
            <td className="about-name">Height: </td>
            <td className="about-data">{height}Cm</td>
          </tr>
          <tr>
            <td className="about-name">Weight: </td>
            <td className="about-data">{weight}Kg</td>
          </tr>
          <tr>
            <td className="about-name">Abilities: </td>
            <td className="about-data">{eachAbilitie}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
// test
export default PokemonDetails
