export const TOGGLE_NAME = 'TOGGLE_NAME';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const UPDATE_NAME = 'UPDATE_NAME';

export const changeVisible = {
    type: TOGGLE_NAME
};
export const changeCheckBox = {
    type: TOGGLE_CHECKBOX
};
export const updateName = (name) => ({
    type: UPDATE_NAME,
    payload: name
})