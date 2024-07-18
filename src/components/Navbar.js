import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar=(props)=>{
    return (
      // from bootstrap
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">NewsApp</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/">General</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/business">Business</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/sports">Sports</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/health">Health</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/technology">Technology</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/science">Science</NavLink>
        </li>       
      </ul>
      <div className={`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label " for="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }

export default Navbar
