import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Cynthia
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="ms-auto">
            <ul className="navbar-nav">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Education", path: "/education" },
                { name: "Skills", path: "/skills" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li className="nav-item" key={item.name}>
                  <NavLink
  to={item.path}
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
>
  {item.name}
</NavLink>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
