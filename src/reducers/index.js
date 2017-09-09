import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';

const rootReducer = combineReducers({
  menu: MenuReducer
});

export default rootReducer;
