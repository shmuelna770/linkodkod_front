import { Link } from "react-router"
import "../style/scondNav.css"
export default function Secondnav() {
  return (
     <div className="vavBar2">
      <Link className="link1" to="/home" ><p id="nav">Home</p></Link>
      <Link className="link1" to="/add"><p id="nav">add post</p></Link>
      <Link className="link1" to="/" ><p id="nav">Log out</p></Link>
    </div>
  )
}
