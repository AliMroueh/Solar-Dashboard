import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';

import {
    GET_ALL_SOLARS_REQUEST,
    GET_ALL_SOLARS_SUCCESS,
    GET_ALL_SOLARS_FAILURE,

    ADD_NEW_SOLAR_REQUEST,
    ADD_NEW_SOLAR_SUCCESS,
    ADD_NEW_SOLAR_FAILURE,

    UPDATE_SOLAR_REQUEST,
    UPDATE_SOLAR_SUCCESS,
    UPDATE_SOLAR_FAILURE,

    DELETE_SOLAR_REQUEST,
    DELETE_SOLAR_SUCCESS,
    DELETE_SOLAR_FAILURE,

} from '../constants/solarConstants'
import { RootState } from "../store";


// get solar
  export const getAllSolarAction = () : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: GET_ALL_SOLARS_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.get('/api/solars/get', {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      })

      dispatch({
        type: GET_ALL_SOLARS_SUCCESS,
        payload: data,
      });

    } catch (error:any) {
      dispatch({
        type: GET_ALL_SOLARS_FAILURE,
        payload: {
          error: error.response && error.response.data.message ? error.response.data.message : error.message,
        },
      });
    }
  };



  // insert solar

export const addSolarAction =  (info: any) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {

    dispatch({ type: ADD_NEW_SOLAR_REQUEST })
    const {
      userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await axios.post(`/api/solars/create`, info, {
          headers: { Authorization: `Bearer ${userInfo?.token}` },
        });
          dispatch({
            type: ADD_NEW_SOLAR_SUCCESS,
            payload: data,
        });
    } catch (error:any) {

        dispatch({
            type: ADD_NEW_SOLAR_FAILURE,
            payload:  error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
        })
    }
}


// edit 

export const updateSolarAction = (id: string, info:any) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
  dispatch({ type: UPDATE_SOLAR_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.put(`/api/solars/solar/update/${id}`,info ,{
      headers: { Authorization: `Bearer ${userInfo?.token}` },
    });
    dispatch({
      type: UPDATE_SOLAR_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: UPDATE_SOLAR_FAILURE,
      payload: error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
    });
  }
};

export const deleteSolarAction = (id: Number) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
  dispatch({ type: DELETE_SOLAR_REQUEST })
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.delete(`/api/solars/solar/delete/${id}` ,{
      headers: { Authorization: `Bearer ${userInfo?.token}` },
    });
    dispatch({
      type: DELETE_SOLAR_SUCCESS,
      payload: data,
    })
  } catch (error:any) {
    dispatch({
      type: DELETE_SOLAR_FAILURE,
      payload:  error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
    })
  }
}




