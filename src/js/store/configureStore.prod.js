import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;