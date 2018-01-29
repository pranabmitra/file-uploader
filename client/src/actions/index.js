export const addFile = files => {
    return {
        type: 'ADD_FILE',
        files
    }
};

export const removeFile = file  => {
    return {
        type: 'REMOVE_FILE',
        file
    }
};

export const clearAll = ()  => {
    return {
        type: 'CLEAR_ALL'
    }
};

export function clearFromServer() {
    return dispatch => {
      setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(clearAll());
      }, 1000);
    };
  }
