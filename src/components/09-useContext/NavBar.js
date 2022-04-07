import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-1">
            <Link className="navbar-brand px-2" to='/'>useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className={({ isActive }) => "nav-link nav-item" + (isActive ? " active" : "")} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => "nav-link nav-item" + (isActive ? " active" : "")} to='/about'>About</NavLink>
                    <NavLink className={({ isActive }) => "nav-link nav-item" + (isActive ? " active" : "")} to='/login'>Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar