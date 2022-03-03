import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="navBar  ">
        <div className="navLinks logo d-flex justify-content-around bg-primary ">
          <p>lorem 24/7 &nbsp; | &nbsp; lorem@gmail.com </p>
          <dd className="links d-flex  ">
            <dl>
              <Link to="/" style={{ padding: "10px" }}>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </dl>
            <dl>
              <Link to="/" style={{ padding: "10px" }}>
                <i className="fa-brands fa-linkedin "></i>
              </Link>
            </dl>
            <dl>
              <Link to="/" style={{ padding: "10px" }}>
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </dl>
          </dd>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white container">
  <Link className="navbar-brand d-flex" to="/"><i className="fa-solid fa-square m-2" ></i>Bisnes</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active  ">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Project</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Blog</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
        {/* <div className="navLink2 d-flex  justify-content-around">
           
            <h2 className="d-flex"><i className="fa-solid fa-square" ></i> &nbsp; Bisnes</h2>
            <dd className="links2 d-flex fs-xx-large">
                <dl>Home</dl>
                <dl>About</dl>
                <dl>Project</dl>
                <dl>Blog</dl>
                <dl>Services</dl>
                <dl>Contact</dl>
            </dd>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
