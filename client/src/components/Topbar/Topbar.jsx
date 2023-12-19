import "./topbar.css";
import logo from "../../assets/logo_code.jpg"
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
      <nav className="topbar">
        <div className="left-corner">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="title">
            <h1>Z-Code</h1>
          </div>
        </div>
        <div className="right-corner">
          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;