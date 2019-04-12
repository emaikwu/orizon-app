import C from '../actions/constants';

const usersReducer = (state=[], action) => {
	switch(action.type) {
		case C.ALL_USERS:
			return [...action.payload];
		case C.GET_USER:
			return [...state, action.payload];
		case C.ADD_USER:
			return [...state, action.payload];
		case C.EDIT_USER:
			return [state.map(user => user.id === action.payload.id ? action.payload.data : user)];
		case C.REMOVE_USER:
			return state.filter(({id}) => id !== action.payload.id);
		default: 
			return state;
	}
}

export default usersReducer;