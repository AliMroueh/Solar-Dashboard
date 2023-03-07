import {
    GET_ALL_INVERTER_REQUEST,
    GET_ALL_INVERTER_SUCCESS,
    GET_ALL_INVERTER_FAILURE,

    ADD_NEW_INVERTER_REQUEST,
    ADD_NEW_INVERTER_SUCCESS,
    ADD_NEW_INVERTER_FAILURE,

    UPDATE_INVERTER_REQUEST,
    UPDATE_INVERTER_SUCCESS,
    UPDATE_INVERTER_FAILURE,

    DELETE_INVERTER_REQUEST,
    DELETE_INVERTER_SUCCESS,
    DELETE_INVERTER_FAILURE,


    GET_ONE_INVERTER_REQUEST,
    GET_ONE_INVERTER_SUCCESS,
    GET_ONE_INVERTER_FAILURE

} from '../constants/inverterConstants'

export const getallInverterReducer = (state = { inverter: [] }, action: { type: any; payload: any }) => {
    switch (action.type) {
        case GET_ALL_INVERTER_REQUEST:
            return { loading: true, inverter: [] }

        case GET_ALL_INVERTER_SUCCESS:
            return { loading: false, inverter: action.payload }

        case GET_ALL_INVERTER_FAILURE:
            return { loading: false, error: action.payload }

        default: return state
    }
}



//Add

export const addInverterReducer = (state = { inverter: [] }, action: { type: any; payload: any }) => {
    switch (action.type) {
        case ADD_NEW_INVERTER_REQUEST:
            return { loading: true, ...state }

        case ADD_NEW_INVERTER_SUCCESS:
            return { loading: false, inverter: action.payload }

        case ADD_NEW_INVERTER_FAILURE:
            return { loading: false, error: action.payload }

        default: return state
    }
}


//update
export const updateInverterReducer = (state = { inverter: [] }, action: { type: any; payload: any }) => {
    switch (action.type) {
        case UPDATE_INVERTER_REQUEST:
            return { loading: true, ...state }

        case UPDATE_INVERTER_SUCCESS:
            return { loading: false, inverter: action.payload }

        case UPDATE_INVERTER_FAILURE:
            return { loading: false, error: action.payload }

        default: return state
    }
}




/// delete

export const deleteInverterReducer = (state = {}, action: { type: any; payload: any }) => {
    switch (action.type) {
        case DELETE_INVERTER_REQUEST:
            return { loading: true, ...state }

        case DELETE_INVERTER_SUCCESS:
            return { loading: false, success:true }

        case DELETE_INVERTER_FAILURE:
            return { loading: false, error: action.payload }

        default: return state
    }
}