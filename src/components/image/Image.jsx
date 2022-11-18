import { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"

function Image() {
  const [base64, setBase64] = useState("")

  const url = "https://44.200.86.249:5000/lectura/"

  const input = useSelector((state) => state.input.value)


  axios
    .post(url, {
      month: parseInt(input.mes),
      day: parseInt(input.dia),
      ts: parseInt(input.ts),
      precio_kWh: parseInt(input.precio_kWh),
    })
    .then((res) => {
      setBase64(res.data.image)
      console.log(res.data.image)
    }, [])

  return (
    <div>
      <img src={`data:image/png;base64, ${base64}`} alt="Chart" />
    </div>
  )
}

export default Image
