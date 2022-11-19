import { THEME_COLOR, NAVBAR_BG, SIDEBAR_BG, DIRECTION, DARK_THEME } from '../constants';

const INIT_STATE = {
  activeDir: 'ltr',
  activeNavbarBg: '#0b70fb', // This can be any color,
  activeSidebarBg: '#ffffff', // This can be any color
  activeMode: 'light', // This can be light or dark
  activeTheme: 'BLUE_THEME', // BLUE_THEME, GREEN_THEME, RED_THEME, BLACK_THEME, PURPLE_THEME, INDIGO_THEME
  SidebarWidth: 240,
  isLoaded: false,
  languages: {
    selected: 0,
    available: [
      {
        text: 'English',
        code: 'en',
        flag: 'gb'
      },
      {
        text: 'Français',
        code: 'fr',
        flag: 'fr'
      }
    ]
  }
};

const CustomizerReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case NAVBAR_BG:
      return {
        ...state,
        activeNavbarBg: action.payload,
      };
    case DARK_THEME:
      return {
        ...state,
        activeMode: action.payload,
      };
    case SIDEBAR_BG:
      return {
        ...state,
        activeSidebarBg: action.payload,
      };
    case THEME_COLOR:
      return {
        ...state,
        activeTheme: action.payload,
      };
    case DIRECTION:
      return {
        ...state,
        activeDir: action.payload,
      };
    case 'SET_CUSTOMIZER':
      console.log(action)
      if(action.payload === undefined) 
        return {
          ...state,
          languages: {
            ...INIT_STATE.languages,
            available: INIT_STATE.languages.available,
          },
          isLoaded: true
        }

      return {
        ...state,
        ...action.payload,
        languages: {
          ...INIT_STATE.languages,
          ...state.languages,
          available: {...INIT_STATE.languages.available},
          selected: action.payload.languages.selected,
        },
        isLoaded: true
      }
    case 'SET_LANGUAGE':
      console.log(action)
      return {
        ...state,
        languages: {
          ...state.languages,
          selected: action.payload.selected
        }
      }
    default:
      return state;
  }
};

export default CustomizerReducer;
