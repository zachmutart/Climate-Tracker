import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { ReactComponent as Logo } from '../../img/logo.svg'
import './NavBar.css'

function Navbar() {
    const [click, setClick] = useState(false)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className='navbar'>
                    <Link to='/' className='navbar-logo' onClick={() => setClick(false)}>
                        <Logo className='logo' />
                        <p>ClimateTracker</p>
                    </Link>
                    <div className='menu-icon' onClick={() => setClick(!click)}>
                        {click ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={() => setClick(false)}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/map'
                                className='nav-links'
                                onClick={() => setClick(false)}
                            >
                                Map
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to="/"
                                className='nav-links'
                                onClick={() => setClick(false)}
                            >
                                Chatroom
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/conservation'
                                className='nav-links'
                                onClick={() => setClick(false)}
                            >
                                Conservation
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/login'
                                className='nav-links nav-login'
                                onClick={() => setClick(false)}
                            >
                                Sign In
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/join'
                                className='nav-links nav-create'
                                onClick={() => setClick(false)}
                            >
                                Create Account
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar