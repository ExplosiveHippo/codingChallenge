import { createStore } from 'redux';
import RootReducer from './reducers';
export default(initialState => {
	return createStore(RootReducer, initialState);
})