import "./Chart.css"

import "animate.css"

const Chart = ({ value = 50, max = 100 }) => {
  const percent = (value / max) * 100
  const graphColor = percent >= 50 ? "green" : "red"
  return (
    <>
      <div
        className={`range-view ${graphColor} animate__animated animate__fadeInRight`}
        style={{ "--percent": `${percent}%` }}
      ></div>
    </>
  )
}

export default Chart
