import { GET_CATSFACT_FAILURE, GET_CATSFACT_REQUEST, GET_CATSFACT_SUCCESS } from "./actions";

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}

const initialState = {
    cats: [],
    request: STATUSES.IDLE,
    error: false,
    loading: false
}

const catsFactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATSFACT_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                loading: true
            };
        case GET_CATSFACT_SUCCESS:
            return {
                ...state,
                request: STATUSES.SUCCESS,
                cats: action.payload,
                error: false,
                loading: false
            };
        case GET_CATSFACT_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
} 

export default catsFactsReducer;