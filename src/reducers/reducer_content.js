import { FETCH_CONTENT } from '../actions/index';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_CONTENT:

			let data = action.payload[0].find(item =>{
				return item.containing_object && item.id === action.payload[1]
			});

			return data.containing_object.properties;

		default: return state;
	}

}