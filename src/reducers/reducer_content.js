import { FETCH_CONTENT } from '../actions/index';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_CONTENT:

			let data;

			if(action.payload[1]){
				data = action.payload[0].find(item =>{
					return item.containing_object && item.id === action.payload[1]
				});

			}else{
				data = {
					containing_object: {
						name: 'General Info',
						properties: []
					}
				};

				action.payload[0].forEach(item => {

					if(item.data_type !== 'list' && item.data_type !== 'object') {
						data.containing_object.properties.push(item);
					}
				})
			}

			return {properties: data.containing_object.properties, name: data.containing_object.name};

		default: return state;
	}

}