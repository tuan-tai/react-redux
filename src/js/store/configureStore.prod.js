import { createStore, applyMiddleware } from 'redux';
import api from '../services/api';
import rootReducer from '../reducers';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, api)
);

export default configureStore;