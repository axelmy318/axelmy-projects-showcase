import { combineReducers } from 'redux';
import ProjectsReducer from './Projects/ProjectsReducer'
import CustomizerReducer from './Customizer/CustomizerReducer';

const RootReducers = combineReducers({
    Projects: ProjectsReducer,
    Customizer: CustomizerReducer,
});

export default RootReducers;
