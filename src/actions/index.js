import Data from '../schema.json';
console.log(Data);
export const FETCH_MENU = 'FETCH_MENU';

export function fetchMenu() {
	return {
		type: FETCH_MENU,
		payload: Data
	}
}