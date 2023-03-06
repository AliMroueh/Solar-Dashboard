import {
    GET_ALL_SOLAR_REQUEST,
    GET_ALL_SOLAR_SUCCESS,
    GET_ALL_SOLAR_FAILURE,

    ADD_NEW_SOLAR_REQUEST,
    ADD_NEW_SOLAR_SUCCESS,
    ADD_NEW_SOLAR_FAILURE,

    UPDATE_SOLAR_REQUEST,
    UPDATE_SOLAR_SUCCESS,
    UPDATE_SOLAR_FAILURE,

    DELETE_SOLAR_REQUEST,
    DELETE_SOLAR_SUCCESS,
    DELETE_SOLAR_FAILURE,


    GET_ONE_SOLAR_REQUEST,
    GET_ONE_SOLAR_SUCCESS,
    GET_ONE_SOLAR_FAILURE

} from '../constants/solarConstants'

export const getallSolarReducer = (state = { solar: [] }, action) => {
    switch (action.type) {
        case GET_ALL_SOLAR_REQUEST:
            return { loading: true, solar: [] }

        case GET_ALL_SOLAR_SUCCESS:
            return { loading: false, solar: action.payload }

        case GET_ALL_SOLAR_FAILURE:
            return { loading: false, error: action.payload }

        default: return state
    }
}



//Add

export const addSolarReducer = (state = { solar: [] }, action) => {
    switch (action.type) {
        case ADD_NEW_SOLAR_REQUEST:
            return { loading: true, ...state }

        case ADD_NEW_SOLAR_SUCCESS:
            return { loading: false, solar: action.payload }

        case ADD_NEW_SOLAR_FAILURE:
            return { loading: false, error: action.payload }

        default: return state
    }
}


//update
export const updateSolarReducer = (state = { solar: [] }, action) => {
    switch (action.type) {
        case UPDATE_SOLAR_REQUEST:
            return { loading: true, ...state }

        case UPDATE_SOLAR_SUCCESS:
            return { loading: false, solar: action.payload }

        case UPDATE_SOLAR_FAILURE:
            return { loading: false, error: action.payload }

        default: return state
    }
}




/// delete

export const deleteSolarReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_SOLAR_REQUEST:
            return { loading: true, ...state }

        case DELETE_SOLAR_SUCCESS:
            return { loading: false, success: true }

        case DELETE_SOLAR_FAILURE:
            return { loading: false, error: action.payload }

        default: return state
    }
}