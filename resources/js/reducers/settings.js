import C from '../actions/constants';

const settingsReducer = (state=[], action) => {
	switch(action.type) {
		case C.ALL_SETTINGS:
			return [...state, ...action.payload];
		case C.GET_SETTING:
			return [...state, action.payload];
		case C.ADD_SETTING:
			return [...state, action.payload];
		case C.EDIT_SETTING:
			return [state.map(setting => setting.id === action.payload.id ? action.payload : setting)];
		default: 
			return state;
	}
}

export default settingsReducer;