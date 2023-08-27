import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">

    <Link className="nav-link" to="/Textform">{props.home}</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
         /* <Link className="nav-link" to="/Password">Password</Link>
          </li>
          { <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="google.com">Action</a></li>
              <li><a className="dropdown-item" href="google.com">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="google.com">Something else here</a></li>
            </ul>
          </li> */}
       
        </ul>
       
        <div className={`form-check form-switch text-${props.mode==="light" ? "dark":"light"}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {props.mode==="light" ? "dark":"light"} Mode</label>
</div>
</div>      </div>

  </nav>
  )



}
Navbar.propTypes = {
    // title :PropTypes.number,
    // title :PropTypes.number.isRequired,if this is written then it would be compulsory to give a value and you cant leave it blank while calling your value in App.js
    home: PropTypes.string
  }

  Navbar.defaultProps = {
    title:"Your title here",
    home:"about your home here",
    mode:"dark"
  }
