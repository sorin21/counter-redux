import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import rootReducer from './store';

import registerServiceWorker from './registerServiceWorker';

// This is a middleware
// const logger = store => {
//   // let the action to rich the reducer
//   return next => {
//     return action => {
//       // write the code that will be executed
//       // between the actions and reducers
//       console.log('[Middleware] dispatching: ', action);
//       // let the action continue to reducer
//       const result = next(action);
//       console.log('[Middleware] next state: ', store.getState());
//       return result;
//     }
//   }
// };
const logger = store => next => action => {
  // write the code that will be executed
  // between the actions and reducers
  console.log('[Middleware] dispatching: ', action);
  // let the action continue to reducer
  const result = next(action);
  console.log('[Middleware] next state: ', store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logger, thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
