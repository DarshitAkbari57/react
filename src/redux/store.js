import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {createEpicMiddleware} from 'redux-observable';
import rootEpic from './root.epic';
import logger from 'redux-logger'

const epicMiddleware = createEpicMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-enable */
export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk, epicMiddleware, logger)
    )
);

export const configureStore = (initialState = {}) => {
    epicMiddleware.run(rootEpic);
    return store;
}
