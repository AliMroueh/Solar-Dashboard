import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
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



export const getAllBatteriesAction = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: GET_ALL_BATTERIES_REQUEST });

  try {
    const { data } = await axios.get('/api/batteries/get');

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

export const addNewBatteryAction = (info: any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: ADD_NEW_BATTERY_REQUEST });
    try {
      const { data } = await axios.post(`/api/batteries/create`, info);
  
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

  export const updateBatteryAction = (id: string, info:any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    
    dispatch({ type: UPDATE_BATTERY_REQUEST });
    try {
      const { data } = await axios.put(`/api/batteries/battery/update/${id}`, info);
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
  
  export const deleteBatteryAction = (id: Number) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: DELETE_BATTERY_REQUEST })
    
    try {
      const { data } = await axios.delete(`/api/batteries/battery/delete/${id}`);
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