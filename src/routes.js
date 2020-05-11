import React from 'react';
import Members from './pages/Members/Members';
import Projects from './pages/Projects/Projects';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Projects/>
    },
    {
        path: '/members',
        exact: false,
        main: () => <Members/>
    },
    {
        path: '/projects',
        exact: false,
        main: () => <Projects/>
    }
];


export default routes;

