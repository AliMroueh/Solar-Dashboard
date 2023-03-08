import axios from "axios";
import { Dispatch } from "redux";

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



export const getallInverterAction = () => async (dispatch: Dispatch) => {
    dispatch({ type: GET_ALL_INVERTER_REQUEST })

    try {

        const { data } = await axios.get('/api/solar/get')

        dispatch({
            type: GET_ALL_INVERTER_SUCCESS,
            payload: data,
        })
    } catch (error:any) {

        dispatch({
            type: GET_ALL_INVERTER_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//insert category

export const addInverterAction = (info: any) => async (dispatch: Dispatch, getState: () => { userSignin: { userInfo: any; }; }) => {
    dispatch({ type: ADD_NEW_INVERTER_REQUEST })

    const { userSignin: { userInfo } } = getState();
    try {

        const { data } = await axios.post(`/api/inverter/create`, info, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
            // headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` } 
        })


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
export const updateInverterAction = (id: any, info: any) => async (dispatch:Dispatch, getState: () => { userSignin: { userInfo: any; }; }) => {

    dispatch({ type: UPDATE_INVERTER_REQUEST })
    const { userSignin: { userInfo } } = getState();
    try {


        const { data } = await axios.put(`/api/inverters/inverter/update/${id}`, info, { headers: { Authorization: `Bearer ${userInfo.token}` }, })


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
export const deleteInverterAction = (id: any) => async (dispatch:Dispatch, getState: () => { userSignin: { userInfo: any; }; }) => {
    dispatch({ type: DELETE_INVERTER_REQUEST })
    const { userSignin: { userInfo } } = getState();
    try {


        const { data } = await axios.delete(`/api/inverters/inverter/delete/${id}`, { headers: { Authorization: `Bearer ${userInfo.token}` }, })



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



