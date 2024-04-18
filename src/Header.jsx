import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <>
<nav className="navbar navbar-expand-sm bg-light navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><NavLink to={'/Home'}><img className='logo' src="img/logo.jpeg" /></NavLink></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navId"  >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navId">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" ><NavLink to={"/Home"}>Home</NavLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><NavLink to= {"/About"}>About</NavLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " ><NavLink to={"/Contact"}>Contact</NavLink></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search"  />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      

    </>
  )
}

export default Header
