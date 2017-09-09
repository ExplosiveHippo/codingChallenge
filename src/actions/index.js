import Data from '../schema.json';
export const FETCH_MENU = 'FETCH_MENU';

export function fetchMenu() {
	return {
		type: FETCH_MENU,
		payload: Data
	}
}