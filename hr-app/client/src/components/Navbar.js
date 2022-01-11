import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import { SidebarData } from './SidebarData';
import './Navbar.css'

const Navbar = () => {
    const [drawerisOpen, setdrawerisOpen] = useState(false);

    const openDrawer = () => setdrawerisOpen(true);

    const closeDrawer = () => setdrawerisOpen(false);

    return (
        <>
            {drawerisOpen ?
                <button className='navbar-button' onClick={closeDrawer}>
                    <FontAwesomeIcon size='lg' icon={faTimes} />
                </button>
                :
                <button className='navbar-button' onClick={openDrawer}>
                    <FontAwesomeIcon size='lg' icon={faBars} />
                </button>
            }
            {
                drawerisOpen && (
                    <nav className='nav-menu'>
                        <ul className='nav-menu-block' onClick={openDrawer}>
                            {SidebarData.map((data, index) => {
                                return (
                                    <li key={`${data.option}${index}`} className='nav-item'>
                                        <Link to={data.path}>
                                            {data.icon}<span>{data.option}</span>
                                        </Link>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </nav>
                )
            }

        </>
    )
}

export default Navbar;