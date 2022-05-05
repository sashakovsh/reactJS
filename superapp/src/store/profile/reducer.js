import {TOGGLE_NAME, TOGGLE_CHECKBOX, UPDATE_NAME } from './actions';

const initialState = {
    showName: false,
    name: 'Volodimir',
    checkBox: false
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_NAME: 
            return {
                ...state,
                showName: !state.showName
            };
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkBox: !state.checkBox
            };
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload    
            }
        default: 
            return state;
    }
}

export default profileReducer;