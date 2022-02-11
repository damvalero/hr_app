import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUsers, } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
    {
        option: 'The Crew',
        path: '/',
        icon: <FontAwesomeIcon icon={faUsers} />
    },
    {
        option: 'Add Colleague',
        path: '/employees/new',
        icon: <FontAwesomeIcon icon={faUserPlus} />
    },
    // {
    //     option: 'Teams',
    //     path: '/employees/teams',
    //     icon: <FontAwesomeIcon icon={faSitemap} />
    // },
]