import { Link, NavLink } from "react-router-dom";
import logo from "../Images/logo.png";

const NavBar = () => {
  return (
    <header className="p-3 bg-dark text-white">
      {/* <div className="container-fluid"> */}
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Bootstrap"
            width="60"
            height="32"
            className="d-inline-block align-text-center"
          />{" "}
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 ms-4 justify-content-center mb-md-0">
          <li className="nav-item">
            <NavLink
              // className="text-secondary nav-link px-2 active"
              className={(navData) =>
                navData.isActive
                  ? "text-white nav-link px-2"
                  : "text-secondary nav-link px-2"
              }
              // activeClassName="text-white"
              // activeClassName="selected"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "text-white nav-link px-2"
                  : "text-secondary nav-link px-2"
              }
              // activeClassName="text-white"
              to="/reports"
            >
              All Reports
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
