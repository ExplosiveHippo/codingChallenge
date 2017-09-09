import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';
import ContentReducer from './reducer_content';

const rootReducer = combineReducers({
  menu: MenuReducer,
  activeSection: ContentReducer
});

export default rootReducer;
