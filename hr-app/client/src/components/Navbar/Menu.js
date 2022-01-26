import React from 'react';
import { Link } from 'react-router-dom';
import { bool, func } from 'prop-types';

import { SidebarData } from './SidebarData';

const Menu = ({open, setOpen}) => {
    return (
        <nav open={open} style={{transform: open ? 'translateX(0)' : 'translateX(-100%)'}} className= 'nav-menu active'>
            <ul className='nav-menu-block' >
                {SidebarData.map((data, index) => {
                    return (
                        <li key={`${data.option}${index}`} className='nav-item'>
                            <Link to={data.path} onClick={() => setOpen(false)}>
                                {data.icon}<span>{data.option}</span>
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </nav>
    )
};

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
}

export default Menu;