import "../style/header.css"
import { Link } from "react-router"
export default function Header() {
  return (
    <div className="vavBar">
      <img src="../public/logo.jpg" alt="logo img" id="logoImg"/>
      <h1>LinKodkod</h1>
      <Link className="link" to="/" >Home</Link>
      <Link className="link" to="/login">login</Link>
      <Link className="link" to="/singUp">singUp</Link>
    </div>
  )
}
