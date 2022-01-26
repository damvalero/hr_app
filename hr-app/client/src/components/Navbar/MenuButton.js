import React from 'react';
import { bool, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const MenuButton = ({ open, setOpen }) => {
    return (
        <div>
            <button type='button' className='navbar-button' open={open} onClick={() => setOpen(!open)}>
                {open ?  <FontAwesomeIcon size='lg' icon={faTimes} />
                    :  <FontAwesomeIcon size='lg' icon={faBars} />
                }
            </button>
        </div>
    )
};

MenuButton.prototypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
}

export default MenuButton;
