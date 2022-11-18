import { useState } from "react"
import Header from "../header/Header"
import "./Home.css"
import Image from "../image/Image"
import Data from "../data/Data"
import axios from "axios"
import { useDispatch } from "react-redux"
import { informations } from "../redux/inputs"

function Home() {
  const [dia, setDia] = useState()
  const [mes, setMes] = useState()
  const [ts, setTs] = useState()
  const [kWh, setKwh] = useState()
  const url = "https://44.200.86.249:5000/lectura/"
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(url, {
        month: mes,
        day: dia,
        ts: ts,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="Main">
      <Header />
      <body className="flex">
        <form onSubmit={handleSubmit}>
          <div>
            Ingrese un dia{" "}
            <input
              className="form"
              type="text"
              required
              onChange={(e) => setDia(e.target.value)}
            />
          </div>
          <div>
            ingrese un mes{" "}
            <input
              className="form"
              tipe="text"
              required
              onChange={(e) => setMes(e.target.value)}
            />
          </div>
          <div>
            Ingrese del 0 al 2 (diario, mensual y anual respectivamente){" "}
            <input
              className="form"
              tipe="text"
              required
              onChange={(e) => setTs(e.target.value)}
            />
          </div>
          <div>
            Ingrese el precio del KWh{" "}
            <input
              className="form"
              tipe="text"
              required
              onChange={(e) => setKwh(e.target.value)}
            />
          </div>
          <button
            className="form"
            type="submit"
            onClick={() => {
              dispatch(
                informations({
                  dia: parseInt(dia),
                  mes: parseInt(mes),
                  ts: parseInt(ts),
                  precio_kWh: parseInt(kWh),
                })
              )
            }}
          >
            Submit
          </button>
        </form>
        <Data className="Data" />
        <Image />
      </body>
    </div>
  )
}

export default Home
