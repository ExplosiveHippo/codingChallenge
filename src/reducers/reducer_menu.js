import { FETCH_MENU } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_MENU:
			return [ action.payload.data, ...state ];
		default: return state;
	}

}