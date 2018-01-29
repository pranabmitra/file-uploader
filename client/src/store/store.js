import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../reducers/reducers';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';

export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState, applyMiddleware(thunk, Logger));

    return store;
};

export const store = configureStore();
