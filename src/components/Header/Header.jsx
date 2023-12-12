import './Header.css'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header>
        <h1>Carter Nichols - Fullstack Developer</h1>
        <nav className="navStyle">
          <Link to="/">
            <div className="inNav">HOME</div>
          </Link>
          <Link to="/about">
            <div className="inNav">ABOUT</div>
          </Link>
          <Link to="/projects">
            <div className="inNav">PROJECTS</div>
          </Link>
        </nav>
      </header>
    )
}

