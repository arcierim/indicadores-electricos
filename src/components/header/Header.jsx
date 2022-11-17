import "./Header.css"
import Logo from "../../assets/Uninorte.png"

const Header = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        <img src={Logo} className="logo" />
      </div>
    </nav>
  )
}

export default Header
