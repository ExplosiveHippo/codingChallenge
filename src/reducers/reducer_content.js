import { FETCH_CONTENT } from '../actions/index';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_CONTENT:

			// Because the General Info section is not structured like the others
			// We will build our data object differently, so in the end they are structured
			// and returned as similar objects

			let data;

			// If the id exists, it's a normal section 
			if(action.payload[1]){
				data = action.payload[0].find(item =>{
					return item.containing_object && item.id === action.payload[1]
				});

			}else{ // The id is null, we need to build a containing_object object
				data = {
					containing_object: {
						name: 'General Info',
						properties: []
					}
				};

				// Populate the propertie array in our data object literal
				action.payload[0].forEach(item => {
					if(!item.containing_object && item.data_type !== 'object') {
						data.containing_object.properties.push(item);
					}
				})
			}

			//Thanks to the way we replicated the data object, we can just have one simple return
			return {properties: data.containing_object.properties, name: data.containing_object.name};

		default: return state;
	}

}