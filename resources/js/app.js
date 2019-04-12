require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import reducers from './reducers';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from "redux-promise";
import ReduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

const App = () => {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App/>
  </Provider>,
  document.getElementById('app'));
