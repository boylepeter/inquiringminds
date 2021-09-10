import * as actionTypes from '../constants/presentationConstants';

export const getPresentationsReducer = (state = { presentations: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRESENTATIONS_REQUEST:
            return {
                loading: true,
                presentations: []
            };
        case actionTypes.GET_PRESENTATIONS_SUCCESS:
            return {
                loading: false,
                presentations: action.payload
            };
        case actionTypes.GET_PRESENTATIONS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default: return state
    }
};

export const getPresentationDetailsReducer = (state = { presentation: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRESENTATION_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_PRESENTATION_DETAILS_SUCCESS:
            return {
                loading: false,
                presentation: action.payload
            };
        case actionTypes.GET_PRESENTATION_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_PRESENTATION_DETAILS_RESET:
            return {
                presentation: {}
            };
        default: return state
    };
}