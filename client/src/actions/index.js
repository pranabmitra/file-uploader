export const addFile = file => {
    return {
        type: 'ADD_FILE',
        file
    }
};

export const removeFile = file  => {
    return {
        type: 'REMOVE_FILE',
        file
    }
};
