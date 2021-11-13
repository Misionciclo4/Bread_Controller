import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navegation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            BREAD CONTROLLER
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-lg-auto">
              <li className="nav-item ">
               <Link className="nav-link" to="/">Inicio </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/menu">Sobre Nosotros</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Inventarios">Gestión Inventario</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Login">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
