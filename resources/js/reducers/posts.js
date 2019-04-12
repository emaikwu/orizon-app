import C from '../actions/constants';

const postsReducer = (state=[], action) => {
  switch (action.type) {
  	case C.ALL_POSTS:
  		return [...state, ...action.payload];
  	case C.GET_POST:
  		return [action.payload];;
  	case C.ADD_POST:
  		return [...state, action.payload];
  	case C.EDIT_POST:
  		return state.map(post => post.id === action.payload.id ? action.payload.data : posts);
  	case C.DELETE_POST:
  		return state.filter(({id}) => action.payload.id !== id);
    default:
      return state;
  }
}

export default postsReducer;
