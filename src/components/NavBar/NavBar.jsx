import React from 'react'
import "./NavBar.scss"
import { NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <div className="container">
                <div className="navbar">
                    <div className="navbar_left">
                        <h1 >Labirinth</h1>
                    </div>
                    <div className="navbar_right">
                        <div className="write_blogs">
                            <NavLink to="/writeBlogs"
                            >Write blogs</NavLink>
                        </div>
                        <div className="blogs">
                            <NavLink to="/">Blogs</NavLink>

                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </nav>

    )
}

export default NavBar