import * as actionTypes from '../constants/presentationConstants';
import axios from 'axios';

export const getPresentations = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRESENTATIONS_REQUEST});

        const { data } = await axios.get("/api/presentations");

        dispatch({
            type: actionTypes.GET_PRESENTATIONS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRESENTATIONS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message,
        })
    }
};

export const getPresentationDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRESENTATION_DETAILS_REQUEST});

        const { data } = await axios.get(`/api/presentations/${id}`);

        dispatch({
            type: actionTypes.GET_PRESENTATION_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRESENTATION_DETAILS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message,
        })
    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRESENTATION_DETAILS_RESET,
    });
};