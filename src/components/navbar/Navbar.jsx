import React from 'react'
import { useState } from 'react';
import './navbar.css'
import 'boxicons'
// import Mobnav from '../mob-navbar/Mobnav';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {

    const [menuopen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuopen);
    return (



        <header className='header'>
            <nav className="nav-wrapper">
                <div className="content">
                    <div className="logo">LOGO</div>
                    <ul className={menuopen ? "mobile-menu" : 'menu-web'}>

                        <li><a className='menuitem' href="#hero">Hero</a></li>
                        <li><a className='menuitem' href="#aboutme">about me</a></li>
                        <li><a className='menuitem' href="#skill">Skills</a></li>
                        <li><a className='menuitem' href="#project">Projects</a></li>
                        <li><a className='menuitem' href="#contact">Contact</a></li>
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </button>
                </div>


            </nav>



        </header>

    )
}

export default Navbar