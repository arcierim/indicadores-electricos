import "./LoginForm.css"
import Image from "../../assets/Uninorte.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function LoginForm(setOpenModal) {
  const url = "https://3.236.86.132:5000/lectura/"
  const input = useSelector((state) => state.input.value)
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      month: parseInt(input.mes),
      day: parseInt(input.dia),
      ts: parseInt(input.ts),
      precio_kWh: parseInt(input.precio_kWh),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const dataset = []
      dataset.push(data)
      console.log(dataset)
    })

  return (
    <div className="loginBackground">
      <div className="loginContainer">
        <div className="titleCloseBtn"></div>
        <div className="title">
          <img src={Image} className="Image" />
          <h1>Benvenido, por favor inicie sesión</h1>
        </div>
        <div className="body">
          <form>
            <label className="Name">Ingrese la contraseña</label>
            <input
              type="password"
              className="form"
              id="Name"
              placeholder="Contraseña"
            />
          </form>
        </div>
        <div className="footer">
          <Link className="Link" to="/home">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
