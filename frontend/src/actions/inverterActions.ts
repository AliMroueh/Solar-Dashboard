import axios from "axios";
import { AnyAction} from "redux";
import { ThunkDispatch } from "redux-thunk";


import {
    GET_ALL_INVERTERS_REQUEST,
    GET_ALL_INVERTERS_SUCCESS,
    GET_ALL_INVERTERS_FAILURE,

    ADD_NEW_INVERTER_REQUEST,
    ADD_NEW_INVERTER_SUCCESS,
    ADD_NEW_INVERTER_FAILURE,

    UPDATE_INVERTER_REQUEST,
    UPDATE_INVERTER_SUCCESS,
    UPDATE_INVERTER_FAILURE,

    DELETE_INVERTER_REQUEST,
    DELETE_INVERTER_SUCCESS,
    DELETE_INVERTER_FAILURE,

  
} from '../constants/inverterConstants'



export const getAllInverterAction = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: GET_ALL_INVERTERS_REQUEST })

    try {

        const { data } = await axios.get('/api/inverters/get')

        dispatch({
            type: GET_ALL_INVERTERS_SUCCESS,
            payload: data,
        })
    } catch (error:any) {

        dispatch({
            type: GET_ALL_INVERTERS_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//insert category

export const addInverterAction =  (info: any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: ADD_NEW_INVERTER_REQUEST })

   
    try {

        const { data } = await axios.post(`/api/inverters/create`, info)
        dispatch({
            type: ADD_NEW_INVERTER_SUCCESS,
            payload: data,
        })
    } catch (error:any) {

        dispatch({
            type: ADD_NEW_INVERTER_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



// UPDATE 
export const updateInverterAction  = (id: string, info:any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {

    dispatch({ type: UPDATE_INVERTER_REQUEST })
    
    try {


        const { data } = await axios.put(`/api/inverters/inverter/update/${id}`, info)


        dispatch({
            type: UPDATE_INVERTER_SUCCESS,
            payload: data,
        })
    } catch (error:any) {

        dispatch({
            type: UPDATE_INVERTER_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



//DELTE
export const deleteInverterAction = (id: Number) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: DELETE_INVERTER_REQUEST })
   
    try {


        const { data } = await axios.delete(`/api/inverters/inverter/delete/${id}`)



        dispatch({
            type: DELETE_INVERTER_SUCCESS,
            payload: data,
        })
    } catch (error:any) {

        dispatch({
            type: DELETE_INVERTER_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



