import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
  
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
        <a className="navbar-brand" href="#">{props.title}</a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/contact/add">Add Contact </Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/about">About </Link>
                </li>
              
            </ul>
      
       
    </nav>

   
  )
}


Navbar.deafaultProps={
    title:"My title"
}

Navbar.prototype={
    title:PropTypes.number.isRequired
}