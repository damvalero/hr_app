import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import { SidebarData } from './SidebarData';
import './Navbar.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <button className='navbar' onClick={showSidebar}>
                {sidebar ?
                    <FontAwesomeIcon icon={faBars} />
                    :
                    <FontAwesomeIcon icon={faTimes} />
                }
            </button>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-block'>
                    {SidebarData.map((data, index) => {
                        return (
                            <li key={index} className='nav-item'>
                                <Link to={data.path}>
                                    {data.icon}<span>{data.option}</span>
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar;