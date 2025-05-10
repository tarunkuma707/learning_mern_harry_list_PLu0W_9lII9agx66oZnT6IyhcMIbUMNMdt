import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar- " href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.homeText}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
              </li>
            </ul>
          </div>
        </div>
        <nav className={`navbar bg-${props.mode}`}>
          <div className="container-fluid">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="switchCheckDefault" />
          </div>
          </div>
        </nav>
      </nav>
    </div>
  )
}
Navbar.propTypes = {
    homeText: PropTypes.number,
    aboutText:PropTypes.number,
  };
  Navbar.defaultProps = {
    homeText: 'Stranger'
  };