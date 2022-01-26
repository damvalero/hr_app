import React, { useState, useEffect, useRef } from 'react'

import MenuButton from './MenuButton';
import Menu from './Menu';
import './Navbar.scss'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const handler = () => setOpen(false);
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    },
        [ref, handler],
    );
    return (
        <div ref={ref}>
            <MenuButton open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    )
}

export default Navbar;