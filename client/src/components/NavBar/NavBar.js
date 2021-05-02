import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { ReactComponent as Logo } from '../../img/logo.svg'
import './NavBar.css'


/**
 * NavBar component -
 * 
 * The navigation bar component with standard collapsed menu with icon
 * for smaller display devices.
 * 
 */
function Navbar() {
    const [click, setClick] = useState(false)

    // Return JSX for the NavBar component with Links to URLs
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
                                to="/join"
                                className='nav-links'
                                onClick={() => setClick(false)}
                            >
                                Chatroom
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

// Export the NavBar component
export default Navbar