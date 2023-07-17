import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-a" href="/about">{props.aboutText}</a>
        </li> */}
      </ul>
       <div className={`form-check form-switch text-${props.mode ==='light'? 'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark Mode Enable</label>
      </div>
    {/*<div className="d-flex">
          <div className="bg-info rounded mx-2"  style={{height:'20px',width:'20px'}} onClick={()=>{props.toggleMode('info')}}>
          </div>
          <div className="bg-warning rounded mx-2"  style={{height:'20px',width:'20px'}} onClick={()=>{props.toggleMode('warning')}}>
          </div>
          <div className="bg-danger rounded mx-2"  style={{height:'20px',width:'20px'}} onClick={()=>{props.toggleMode('danger')}}></div>
          <div className="bg-success rounded mx-2"  style={{height:'20px',width:'20px'}} onClick={()=>{props.toggleMode('success')}}></div>
        
      </div> */}
      </div>
     
    </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    dropdown: PropTypes.string
    };

Navbar.defaultProps = {
    title: 'Write Title Here',
    aboutText:'About Us'
}