import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import {
  GET_ALL_BATTERIES_REQUEST,
  GET_ALL_BATTERIES_SUCCESS,
  GET_ALL_BATTERIES_FAILURE,
  ADD_NEW_BATTERY_REQUEST,
  ADD_NEW_BATTERY_SUCCESS,
  ADD_NEW_BATTERY_FAILURE,
  UPDATE_BATTERY_REQUEST,
  UPDATE_BATTERY_SUCCESS,
  UPDATE_BATTERY_FAILURE,
  DELETE_BATTERY_REQUEST,
  DELETE_BATTERY_SUCCESS,
  DELETE_BATTERY_FAILURE
} from '../constants/batteryConstants';
import { RootState } from '../store';



export const getAllBatteriesAction = () : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_BATTERIES_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.get('/api/batteries/get' ,{
      headers: { Authorization: `Bearer ${userInfo?.token}` },
    });

    dispatch({
      type: GET_ALL_BATTERIES_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_ALL_BATTERIES_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNewBatteryAction = (info: any) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: ADD_NEW_BATTERY_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(`/api/batteries/create`, info ,{
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      });
  
      dispatch({
        type: ADD_NEW_BATTERY_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ADD_NEW_BATTERY_FAILURE,
        payload:
          error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
      });
    }
  };

  export const updateBatteryAction = (id: string, info:any) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    
    dispatch({ type: UPDATE_BATTERY_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.put(`/api/batteries/battery/update/${id}`, info ,{
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      });
      dispatch({
        type: UPDATE_BATTERY_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_BATTERY_FAILURE,
        payload:
        error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
      });
    }
  };
  
  export const deleteBatteryAction = (id: Number) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: DELETE_BATTERY_REQUEST })
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/batteries/battery/delete/${id}` ,{
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      });
      dispatch({
        type: DELETE_BATTERY_SUCCESS,
        payload: data,
      })
    } catch (error:any) {
      dispatch({
        type: DELETE_BATTERY_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }