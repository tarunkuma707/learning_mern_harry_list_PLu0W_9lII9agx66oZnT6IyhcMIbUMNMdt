import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function Navbar(props) {
  return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
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
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
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