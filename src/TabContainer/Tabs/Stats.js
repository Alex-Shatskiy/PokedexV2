import Chart from "../../Chart/Chart"

const Stats = (props) => {
  const { stats } = props

  const totalCalculator = (baseStats) => {
    const total = baseStats.reduce((sum, stat) => {
      return sum + stat.base_stat
    }, 0)
    return total
  }

  return (
    <>
      <table className="stat-table">
        <tbody>
          <tr>
            <td className="stat-name">HP: </td>
            <td className="stat-value">
              {stats[0].base_stat}
              <Chart value={stats[0].base_stat} />
            </td>
          </tr>
          <tr>
            <td className="stat-name">Attack: </td>
            <td className="stat-value">
              {stats[1].base_stat}
              <Chart value={stats[1].base_stat} />
            </td>
          </tr>
          <tr>
            <td className="stat-name">Defense: </td>
            <td className="stat-value">
              {stats[2].base_stat}
              <Chart value={stats[2].base_stat} />
            </td>
          </tr>
          <tr>
            <td className="stat-name">Speed: </td>
            <td className="stat-value">
              {stats[5].base_stat}
              <Chart value={stats[5].base_stat} />
            </td>
          </tr>
          <tr>
            <td className="stat-name">Special Attack:</td>
            <td className="stat-value">
              {stats[3].base_stat}
              <Chart value={stats[3].base_stat} />
            </td>
          </tr>
          <tr>
            <td className="stat-name">Special Defense: </td>
            <td className="stat-value">
              {stats[4].base_stat}
              <Chart value={stats[4].base_stat} />
            </td>
          </tr>
          <tr>
            <td className="stat-name">Total</td>
            <td className="stat-value">
              {totalCalculator(stats)}{" "}
              <Chart value={totalCalculator(stats)} max={600} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Stats
