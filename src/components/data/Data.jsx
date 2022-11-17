import { useState, useEffect } from "react"
import axios from "axios"
import { useSelector } from "react-redux"

function Data() {
  const [datas, setData] = useState([])

  const input = useSelector((state) => state.input.value)

  const url = "http://3.236.86.132:5000/lectura/"

  const fetchData = async () => {
    axios
      .post(url, {
        month: parseInt(input.mes),
        day: parseInt(input.dia),
        ts: parseInt(input.ts),
        precio_kWh: parseInt(input.precio_kWh),
      })
      .then((res) => {
        setData([res.data.data])
        console.log(res.data.data)
      })
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <div>
      {datas.map((data, i) => (
        <div className="Data" key={i}>
          <p>V0:{data.v0}</p>
          <p>V1:{data.v1}</p>
          <p>V2:{data.v2}</p>
          <p>V3:{data.v3}</p>
          <p>V4:{data.v4}</p>
          <p>V5:{data.v5}</p>
          <p>V6:{data.v6}</p>
          <p>V7:{data.v7}</p>
          <p>V8:{data.v8}</p>
          <p>V9:{data.v9}</p>
          <p>V81:{data.v81}</p>
          <p>V91:{data.v91}</p>
        </div>
      ))}
    </div>
  )
}

export default Data
