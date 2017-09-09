import Data from '../schema.json';
export const FETCH_MENU = 'FETCH_MENU';
export const FETCH_CONTENT = 'FETCH_CONTENT';

export function fetchMenu() {
	return {
		type: FETCH_MENU,
		payload: Data
	}
}

export function fetchContent(id) {
	return{
		type: FETCH_CONTENT,
		payload: [Data, id]
	}
}