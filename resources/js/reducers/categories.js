import C from '../actions/constants';

const categoriesReducer = (state=[], action) => {
	switch(action.type) {
		case C.ALL_CATEGORIES:
			return [...action.payload];
		case C.GET_CATEGORY:
			return [action.payload];
		case C.ADD_CATEGORY: 
			return [action.payload];
		case C.EDIT_CATEGORY:
			return state.map(category => {
				category.id === action.payload.id ? action.payload.data : category
			});
		case C.REMOVE_CATEGORY:
			return state.filter(({id}) => {
				return id != action.payload.id
			});
		default:
			return state;
	}
}

export default categoriesReducer;