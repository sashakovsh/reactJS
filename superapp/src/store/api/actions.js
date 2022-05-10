import { API_URL_CATSFACT } from "../../constants/constants";

export const GET_CATSFACT_REQUEST = "API::GET_CATSFACT";
export const GET_CATSFACT_SUCCESS = "API::GET_CATSFACT_SUCCESS";
export const GET_CATSFACT_FAILURE = "API::GET_CATSFACT_FAILURE";

export const getCatsFactRequest = () => ({
    type: GET_CATSFACT_REQUEST
});

export const getCatsFactSuccess = (cats) => ({
    type: GET_CATSFACT_SUCCESS,
    payload: cats
});

export const getCatsFactFailure = (error) => ({
    type: GET_CATSFACT_FAILURE,
    payload: error
});

export const getAllFacts = () => async (dispatch) => {
    dispatch(getCatsFactRequest());

    try {
        const response = await fetch(API_URL_CATSFACT);
        if(!response.ok) {
            throw new Error('запрос не выполнен')
        }
        const result = await response.json();
        dispatch(getCatsFactSuccess(result));
    } catch (err) {
        dispatch(getCatsFactFailure(err.message));
    }
};