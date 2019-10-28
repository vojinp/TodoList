import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import rootReducer from '../reducers/rootReducer';

function configureStore(initialState?: object) {
    const middleware = applyMiddleware(logger, promise());
    return createStore(rootReducer, initialState!, middleware);
}

const store = configureStore();

export default store;