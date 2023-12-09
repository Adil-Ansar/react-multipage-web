import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (<nav>
        <div className="menuIcon"></div>
        <ul className="navbar-list">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/service">Services</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;