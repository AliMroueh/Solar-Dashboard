import axios from "axios";
import { AnyAction} from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";


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
import { RootState } from "../store";



export const getAllInverterAction = () : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: GET_ALL_INVERTERS_REQUEST })
    const {
        userSignin: { userInfo },
      } = getState();
    try {

        const { data } = await axios.get('/api/inverters/get' ,{
            headers: { Authorization: `Bearer ${userInfo?.token}` },
          })

        dispatch({
            type: GET_ALL_INVERTERS_SUCCESS,
            payload: data,
        })
    } catch (error:any) {

        dispatch({
            type: GET_ALL_INVERTERS_FAILURE,
            payload: {
                error: error.response && error.response.data.message ? error.response.data.message : error.message,
              },
        })
    }
}

//insert category

export const addInverterAction =  (info: any) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: ADD_NEW_INVERTER_REQUEST })
    const {
        userSignin: { userInfo },
      } = getState();
    try {

        const { data } = await axios.post(`/api/inverters/create`, info ,{
            headers: { Authorization: `Bearer ${userInfo?.token}` },
          })
        dispatch({
            type: ADD_NEW_INVERTER_SUCCESS,
            payload: data,
        })
    } catch (error:any) {

        dispatch({
            type: ADD_NEW_INVERTER_FAILURE,
            payload:  error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
        })
    }
}



// UPDATE 
export const updateInverterAction  = (id: string, info:any) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) =>{

    dispatch({ type: UPDATE_INVERTER_REQUEST })
    const {
        userSignin: { userInfo },
      } = getState();
    try {
        const { data } = await axios.put(`/api/inverters/inverter/update/${id}`, info ,{
            headers: { Authorization: `Bearer ${userInfo?.token}` },
          })
        dispatch({
            type: UPDATE_INVERTER_SUCCESS,
            payload: data,
        })
    } catch (error:any) {

        dispatch({
            type: UPDATE_INVERTER_FAILURE,
            payload: error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
        })
    }
}



//DELTE
export const deleteInverterAction = (id: Number) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: DELETE_INVERTER_REQUEST })
    const {
        userSignin: { userInfo },
      } = getState();
    try {
        const { data } = await axios.delete(`/api/inverters/inverter/delete/${id}` ,{
            headers: { Authorization: `Bearer ${userInfo?.token}` },
          })



        dispatch({
            type: DELETE_INVERTER_SUCCESS,
            payload: data,
        })
    } catch (error:any) {

        dispatch({
            type: DELETE_INVERTER_FAILURE,
            payload:  error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
        })
    }
}



