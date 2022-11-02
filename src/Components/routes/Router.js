import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Loadable from '../Layouts/Loadable'

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../Layouts/FullLayout')))

const Homepage = Loadable(lazy(() => import('../HomepageV2')))

const Router = [
    {
        path: '/',
        element: <FullLayout />,
        children: [
            { path: '/', element: <Homepage /> },
            { path: '/react-github-scraper', element: <Homepage /> },
            /* --- PROJECT --- */
        ],
    },
];

export default Router;
