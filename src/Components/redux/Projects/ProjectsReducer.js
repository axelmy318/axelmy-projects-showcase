import LanguagesExample from "../../examples_GithubScraper/LanguagesExample"
import TopicsExample from "../../examples_GithubScraper/TopicsExample"
import ContributorsExample from "../../examples_GithubScraper/ContributorsExample"
import StargazersCountExample from "../../examples_GithubScraper/StargazersCountExample"
import WatchersCountExample from "../../examples_GithubScraper/WatchersCountExample"
import PushedAtExample from "../../examples_GithubScraper/PushedAtExample"
import ReadmeComponentExample from '../../examples_ReadmePrinter/ComponentExample'
import ShowRepositoryExample from "../../examples_ReadmePrinter/ShowRepositoryExample"
import FunctionExample from "../../examples_ReadmePrinter/FunctionExample"
import WeatherWidgetBasicExample from '../../examples_WeatherStation/BasicExample'
import WeatherWidgetMoreDetails from '../../examples_WeatherStation/ShowMoreDetails'
import DashboardExample from "../../examples_WeatherStation/DashboardExample"
import WeekdaysBasicExample from '../../examples_WeekdaysInput/BasicExample'
import CustomDaysExample from "../../examples_WeekdaysInput/CustomDaysExample"
import CustomStyleExample from "../../examples_WeekdaysInput/CustomStyleExample"
import ForcedStateExample from "../../examples_WeekdaysInput/ForcedStateExample"
import NewWindowBasicExample from "../../examples_NewWindow/BasicExample"
import ShowCharsExample from "../../examples_WeekdaysInput/ShowCharsExample"
import OffsetsAndSizesExample from "../../examples_NewWindow/OffsetsAndSizesExample"
import TitleExample from "../../examples_NewWindow/TitleExample"
import CommitsExample from "../../examples_GithubScraper/CommitsExample"

import { HiOutlineComputerDesktop as LogoApplication } from 'react-icons/hi2'
import { TfiWorld as LogoWebsite } from 'react-icons/tfi'
import { TbBrandDiscord as LogoDiscord } from 'react-icons/tb'
import { FaDiscord as LogoDiscordOutline } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const initialState = {
    families: [
        {
            title: 'About me',
            href: '/',
            icon: 'user'
        },
        {
            subheader: "Packages",
        },
        {
            title: 'React Github Scraper',
            href: '/react-github-scraper',
            icon: 'package'
        },
        {
            title: 'React Readme Printer',
            href: '/react-readme-printer',
            icon: 'package'
        },
        {
            title: 'React Weather Station',
            href: '/react-weather-station',
            icon: 'package'
        },
        {
            title: 'React Weekdays Input',
            href: '/react-weekdays-input',
            icon: 'package'
        },
        {
            title: 'React Window Open',
            href: '/react-window-open',
            icon: 'package'
        },
        
        {
            subheader: "Applications",
        },
        {
            title: 'Philips HUE Controller',
            href: '/philips-hue-controller',
            reactIcon: <IconContext.Provider value={{size: '22px'}}><LogoApplication /></IconContext.Provider>
        },
        {
            subheader: "Websites",
        },
        {
            title: 'Axelmy\'s Projects Showcase',
            href: '/axelmy-projects-showcase',
            reactIcon: <IconContext.Provider value={{size: '20px'}}><LogoWebsite /></IconContext.Provider>
        },
        {
            title: 'Spotify Companion',
            href: '/spotify-companion',
            reactIcon: <IconContext.Provider value={{size: '20px'}}><LogoWebsite /></IconContext.Provider>
        },
        {
            subheader: "Miscellaneous",
        },
        {
            title: 'Discord Weather Bot',
            href: '/discord-weather-bot',
            reactIcon: <IconContext.Provider value={{size: '23px'}}><LogoDiscord /></IconContext.Provider>
        },
    ],
    author: {
        npmjs: "axelmy",
        github: "axelmy318"
    },
    projects: [
        {
            type: 'package',
            path: '/react-github-scraper', 
            name: 'React Github Scraper', 
            github: {
                username: 'axelmy318',
                repository: 'react-github-scraper',
                mainBranch: 'master',
                readmeLanguages: {
                    en: 'README',
                    fr: 'README_fr',
                }
            },
            npmjs: 'https://www.npmjs.com/package/react-github-scraper',
            installation: 'npm i react-github-scraper',
            examples: [
            {
                name: 'Commits component',
                file: 'src/Components/examples_GithubScraper/CommitsExample.js',
                description: 'The code below will loop through each commits of a repository, calling the callback for each one of theme',
                component: <CommitsExample />,
                defaults: [
                    {property: 'label', type: 'string', value: `null`},
                    {property: 'maxDisplayed', type: 'number', value: `7`},
                    {property: 'commitCallback', type: 'function', value: `null`},
                ]
            },
            {
                name: 'Languages component',
                file: 'src/Components/examples_GithubScraper/LanguagesExample.js',
                description: 'A simple example covering how to use the Languages component',
                component: <LanguagesExample />,
                defaults: [
                    {property: 'label', type: 'string', value: `null`},
                    {property: 'maxDisplayed', type: 'number', value: `7`},
                ]
            },
            {
                name: 'Topics component',
                file: 'src/Components/examples_GithubScraper/TopicsExample.js',
                description: 'A simple example covering how to use the Topics component',
                component: <TopicsExample />,
                defaults: [
                    {property: 'label', type: 'string', value: `null`},
                    {property: 'topicCallback', type: 'func', value: `null`}
                ]
            },
            {
                name: 'Contributors component',
                file: 'src/Components/examples_GithubScraper/ContributorsExample.js',
                description: 'A simple example covering how to use the Contributors component',
                component: <ContributorsExample />,
                defaults: [
                    {property: 'label', type: 'string', value: `null`},
                    {property: 'maxDisplayed', type: 'number', value: `7`},
                ]
            },
            {
                name: 'Stargazers count component',
                file: 'src/Components/examples_GithubScraper/StargazersCountExample.js',
                description: 'A simple example covering how to use the StargazersCount component',
                component: <StargazersCountExample />,
                defaults: [
                    {property: 'label', type: 'string', value: `null`},
                    {property: 'prefix', type: 'string', value: `null`},
                ]
            },
            {
                name: 'Watchers count component',
                file: 'src/Components/examples_GithubScraper/WatchersCountExample.js',
                description: 'A simple example covering how to use the WatchersCount component',
                component: <WatchersCountExample />,
                defaults: [
                    {property: 'label', type: 'string', value: `null`},
                    {property: 'prefix', type: 'string', value: `null`},
                ]
            },
            
            {
                name: 'Pushed date component',
                file: 'src/Components/examples_GithubScraper/PushedAtExample.js',
                description: 'A simple example covering how to use the PushedAt component',
                component: <PushedAtExample />,
                defaults: [
                    {property: 'label', type: 'string', value: `null`},
                    {property: 'showAsDate', type: 'bool', value: `false`},
                ]
            },
            ]
        },
        {
            type: 'package',
            path: '/react-readme-printer', 
            name: 'React Readme Printer', 
            github: {
                username: 'axelmy318',
                repository: 'react-readme-printer',
                mainBranch: 'master'
            },
            npmjs: 'https://www.npmjs.com/package/react-readme-printer',
            installation: 'npm i react-readme-printer',
            examples: [
            {
                name: 'Basic example',
                file: 'src/Components/examples_ReadmePrinter/ComponentExample.js',
                description: 'This example covers how print a readme file from GitHub',
                component: <ReadmeComponentExample />,
                defaults: []
            },
            {
                name: 'Show repository',
                file: 'src/Components/examples_ReadmePrinter/ShowRepositoryExample.js',
                description: 'This example covers how remove the repository tag on top of the readme',
                component: <ShowRepositoryExample />,
                defaults: [
                    {property: 'showRepository', type: 'bool', value: 'true'}
                ]
            },
            {
                name: 'How to use the function',
                file: 'src/Components/examples_ReadmePrinter/FunctionExample.js',
                description: 'This example covers how to load a github repo readme using the function to store it somewhere. This function is used in the "MarkdownPrinter" component',
                component: <FunctionExample />,
                defaults: [
                    {property: 'username', type: 'string', value: ''},
                    {property: 'repository', type: 'string', value: ''},
                    {property: 'branch', type: 'string', value: '"main"'},
                ]
            },
            ]
        },
        {
            type: 'package',
            path: '/react-weather-station', 
            name: 'React Weather Station', 
            github: {
                username: 'axelmy318',
                repository: 'react-weather-station',
                mainBranch: 'master'
            },
            npmjs: 'https://www.npmjs.com/package/react-weather-station',
            installation: 'npm i react-weather-station',
            examples: [
            {
                name: 'Basic example',
                file: 'src/Components/examples_WeatherStation/BasicExample.js',
                description: 'A simple example using the default configuration',
                component: <WeatherWidgetBasicExample />,
                defaults: [
                    {property: 'location', type: 'string', value: `""`},
                    {property: 'theme', type: 'string', value: `main`},
                    {property: 'color', type: 'string', value: `secondary`},
                    {property: 'moreDetails', type: 'boolean', value: `false`},
                ]
            },
            {
                name: 'Show more details',
                file: 'src/Components/examples_WeatherStation/BasicExample.js',
                description: 'A simple example covering how to show more details',
                component: <WeatherWidgetMoreDetails />,
                defaults: [
                    {property: 'moreDetails', type: 'boolean', value: `true`},
                ]
            },
            {
                name: 'Using as a dashboard',
                file: 'src/Components/examples_WeatherStation/DashboardExample.js',
                description: 'This example covers how to use the library as a dashboard',
                component: <DashboardExample />,
                defaults: [
                    {property: 'moreDetails', type: 'boolean', value: `true`},
                ]
            },
            ]
        },
        {
            type: 'package',
            path: '/react-weekdays-input', 
            name: 'React Weekdays Input', 
            github: {
                username: 'axelmy318',
                repository: 'react-weekdays-input',
                mainBranch: 'master'
            },
            npmjs: 'https://www.npmjs.com/package/react-weekdays-input',
            installation: 'npm i react-weekdays-input',
            examples: [
            {
                name: 'Basic example',
                file: 'src/Components/examples_WeekdaysInput/BasicExample.js',
                description: 'A simple example using the default configuration',
                component: <WeekdaysBasicExample />,
                defaults: [
                    {property: 'value', type: 'string/array', value: `"0000000"`},
                    {property: 'onChange', type: 'function', value: ``},
                ]
            },
            {
                name: 'Custom styles',
                file: 'src/Components/examples_WeekdaysInput/CustomStyleExample.js',
                description: 'This example covers how to apply custom styling on the component',
                component: <CustomStyleExample />,
                defaults: [
                    {property: 'activeDayStyle', type: 'object', value: ``},
                    {property: 'inactiveDayStyle', type: 'object', value: ``},
                    {property: 'dayStyle', type: 'object', value: ``},
                    {property: 'inputStyle', type: 'object', value: ``},
                ]
            },
            {
                name: 'Forcing state',
                file: 'src/Components/examples_WeekdaysInput/ForcedStateExample.js',
                description: 'This example covers how to force the state of certain days',
                component: <ForcedStateExample />,
                defaults: [
                    {property: 'forcedState', type: 'array', value: ``}
                ]
            },
            {
                name: 'Slicing day names',
                file: 'src/Components/examples_WeekdaysInput/ShowCharsExample.js',
                description: 'This example covers how to slice the day names',
                component: <ShowCharsExample />,
                defaults: [
                    {property: 'showChars', type: 'number', value: 'null'}
                ]
            },
            {
                name: 'Custom days',
                file: 'src/Components/examples_WeekdaysInput/CustomDaysExample.js',
                description: 'This example covers how to set custom days',
                component: <CustomDaysExample />,
                defaults: [
                    {property: 'days', type: 'arary', value: `['monday', 'tuesday', 'wednesday', ...]`},
                    {property: 'textCase', type: 'string', value: `null, Available: 'firstToUpper', 'toUpper', 'toLower'`},
                ]
            },
            ]
        },
        {
            type: 'package',
            path: '/react-window-open', 
            name: 'React Window Open',
            github: {
                username: 'axelmy318',
                repository: 'react-window-open',
                mainBranch: 'master'
            },
            npmjs: 'https://www.npmjs.com/package/react-window-open',
            installation: 'npm i react-window-open',
            examples: [
            {
                name: 'Basic example',
                file: 'src/Components/examples_NewWindow/BasicExample.js',
                description: 'A basic example of react-new-window',
                component: <NewWindowBasicExample />,
                defaults: []
            },
            {
                name: 'Offsets and sizes',
                file: 'src/Components/examples_NewWindow/OffsetsAndSizesExample.js',
                description: 'This example covers offsets ans sizes',
                component: <OffsetsAndSizesExample />,
                defaults: [
                    {property: 'width', type: 'number', value: 1920},
                    {property: 'height', type: 'number', value: 1080},
                    {property: 'top', type: 'number', value: 0},
                    {property: 'left', type: 'number', value: 0},
                    {property: 'right', type: 'number', value: 0},
                    {property: 'bottom', type: 'number', value: 0},
                ]
            },
            {
                name: 'Title',
                file: 'src/Components/examples_NewWindow/TitleExample.js',
                description: 'This example covers how to set a custom title for the window',
                component: <TitleExample />,
                defaults: [
                    {property: 'title', type: "string", value: 'New window'},
                ]
            },
            ]
        },
        {
            type: 'website',
            path: '/axelmy-projects-showcase',
            name: 'Axelmy\'s Projects Showcase',
            website: 'https://axelmy-projects-showcase.firebaseapp.com/',
            github: {
                username: 'axelmy318',
                repository: 'axelmy-projects-showcase',
                mainBranch: 'master'
            },
        },
        {
            type: 'website',
            path: '/spotify-companion',
            name: 'Spotify Companion',
            website: 'https://spotify-companion-ff520.web.app/',
            github: {
                username: 'axelmy318',
                repository: 'spotify-companion',
                mainBranch: 'master'
            },
        },
        {
            type: 'application',
            path: '/philips-hue-controller',
            name: 'Philips HUE Controller',
            releases: 'https://github.com/axelmy318/philips-hue-controller/releases',
            github: {
                username: 'axelmy318',
                repository: 'philips-hue-controller',
                mainBranch: 'main'
            }
        },
        {
            type: 'miscellaneous',
            path: '/discord-weather-bot',
            name: 'Discord Weather Bot',
            customLinks: [
                {
                    label: 'Invite him',
                    url: "https://discord.com/oauth2/authorize?client_id=832684912356098058&scope=bot&permissions=52288",
                    reactIcon: <IconContext.Provider value={{size: '33px'}}><LogoDiscordOutline /></IconContext.Provider>
                },
            ],
            github: {
                username: 'axelmy318',
                repository: 'discord-weather-bot',
                mainBranch: 'master'
            },
        }
    ],
    data: 
        {
            packages: {
            label: '👏 Packages 👏',
            
        },
        websites: {
            label: '🐍 Websites 🐍',
            projects: [
            
            ],
        },
        applications: {
            label: '😎 Applications 😎',
        },
        miscellanious: {
            label: '👻 Miscellaneous 👻',
            projects: [
                
            ],
        }
    },
    currentProject: null
}

initialState.menuItems = initialState.families

const ProjectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_CURRENT_PROJECT":
            return {
                ...state,
                currentProject: state.projects.find(item => item.path === action.payload.data.href)
            }
        default:
            return {...state}
    }
}

export default ProjectsReducer