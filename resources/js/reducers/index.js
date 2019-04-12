import {combineReducers} from 'redux';
import postsReducer from './posts';
import settingsReducer from './settings';
import categoriesReducer from './categories';
import usersReducer from './users';

const reducers = () => 
	combineReducers({
		user: usersReducer,
    posts: postsReducer,
    settings: settingsReducer,
    categories: categoriesReducer
  });



export default reducers;
