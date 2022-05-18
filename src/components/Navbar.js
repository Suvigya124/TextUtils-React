import React from 'react'
import PropTypes from 'prop-types'
import { useActive } from './UserState';
// import {Link} from "react-router-dom";

export default function Navbar(props) {
    const active = useActive(1500);
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
                    <a className="nav-link" href="/about">{props.aboutText}</a>
                </li> */}
            </ul>
            <div className={`active==='true' ? 'active':'inactive' mx-2`} style={{display: 'flex', justifyContent: 'right'}}>
                <button type="button" className={`btn btn-${active===true ? 'info':'warning'}`}>{active===true ? 'User is active' : 'User is inactive'}</button>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} my-2`}>
                <input className="form-check-input" onClick={props.toggleMode} style={{cursor: 'pointer'}} type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked={props.mode==='light'? false:true}/>
                <label className="flexSwitchCheckDefault">Dark mode</label>
            </div>
            </div>
        </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
}