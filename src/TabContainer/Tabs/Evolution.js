import axios from "axios"
import { useState } from "react"

const Stats = (props) => {
  const { id } = props.id
  console.log(id)

  const [evolution, setEvolution] = useState()

  axios
    .get(`https://pokeapi.co/api/v2/evolution-chain/${props.id}/`)
    .then((res) => {
      console.log(res.data)
    })

  return (
    <>
      <p>fsdfsdfsd</p>
    </>
  )
}

export default Stats
