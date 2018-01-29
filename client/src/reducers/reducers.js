import { combineReducers } from 'redux';

const files = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FILE':
            return [...state, ...action.files];
        case 'REMOVE_FILE':
            return state.filter((file) => { return file.name !== action.file; });
        case 'CLEAR_ALL':
            return [];
        default:
            return state;
    }
};

export const reducers = combineReducers({
    files
});
