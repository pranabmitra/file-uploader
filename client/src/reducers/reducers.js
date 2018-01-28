import { combineReducers } from 'redux';

const files = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FILE':
            return [...state, action.file]
        case 'REMOVE_FILE':
            return state; // remove file from state
        default:
            return state;
    }
};

export const reducers = combineReducers({
    files
});
