import React, { lazy } from 'react'
import useProjects from '../customHooks/useProjects'
import Loadable from '../Layouts/Loadable'

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../Layouts/FullLayout')))
const GithubFullLayout = Loadable(lazy(() => import('../Layouts/FullLayoutWithGithubSidebar')))

const Homepage = Loadable(lazy(() => import('../HomepageV2')))
const ProjectPage = Loadable(lazy(() => import('../Project/ProjectPage')))

const getRoutes = (projects) => {
    return [
        {
            path: '/',
            element: <GithubFullLayout />,
            children: [
                { path: '/', element: <Homepage /> },
                ...projects.map((project) => ({ path: `${project.path}/*`, element: <ProjectPage path={project.path} /> }))
            ],
        },
        {
            path: '*', 
            element: <FullLayout />,
            children: [
                { path: "*", element: <ProjectPage undefinedProject={true} />}
            ]
        }
    ];
}

const Router = [
    {
        path: '/',
        element: <GithubFullLayout />,
        children: [
            { path: '/', element: <Homepage /> },
            { path: '/react-github-scraper/*', element: <ProjectPage path={'/react-github-scraper'} /> },
            { path: '/react-readme-printer/*', element: <ProjectPage path={'/react-readme-printer'} /> },
            { path: '/react-tooltip-wrapper/*', element: <ProjectPage path={'/react-tooltip-wrapper'} /> },
            { path: '/react-window-open/*', element: <ProjectPage path={'/react-window-open'} /> },
            { path: '/react-weather-station/*', element: <ProjectPage path={'/react-weather-station'} /> },
            { path: '/react-weekdays-input/*', element: <ProjectPage path={'/react-weekdays-input'} /> },
            { path: '/philips-hue-controller/*', element: <ProjectPage path={'/philips-hue-controller'} /> },
            { path: '/axelmy-projects-showcase/*', element: <ProjectPage path={'/axelmy-projects-showcase'} /> },
            { path: '/spotify-companion/*', element: <ProjectPage path={'/spotify-companion'} /> },
            { path: '/discord-weather-bot/*', element: <ProjectPage path={'/discord-weather-bot'} /> },
        ],
    },
    {
        path: '*', 
        element: <FullLayout />,
        children: [
            { path: "*", element: <ProjectPage undefinedProject={true} />}
        ]
    }
];

export default getRoutes;
