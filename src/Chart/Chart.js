import "./Chart.css"

const Chart = ({ value = 50, max = 100 }) => {
  const percent = (value / max) * 100
  const graphColor = percent >= 50 ? "green" : "red"

  console.log(percent)
  return (
    <>
      <div
        className={`range-view ${graphColor}`}
        style={{ "--percent": `${percent}%` }}
      ></div>
    </>
  )
}

export default Chart
