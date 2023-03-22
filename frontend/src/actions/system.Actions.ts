import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import {
  GET_ALL_SYSTEMS_REQUEST,
  GET_ALL_SYSTEMS_SUCCESS,
  GET_ALL_SYSTEMS_FAILURE,
  ADD_NEW_SYSTEM_REQUEST,
  ADD_NEW_SYSTEM_SUCCESS,
  ADD_NEW_SYSTEM_FAILURE,
  UPDATE_SYSTEM_REQUEST,
  UPDATE_SYSTEM_SUCCESS,
  UPDATE_SYSTEM_FAILURE,
  DELETE_SYSTEM_REQUEST,
  DELETE_SYSTEM_SUCCESS,
  DELETE_SYSTEM_FAILURE
} from '../constants/systemConstants';



export const getAllSystemsAction = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: GET_ALL_SYSTEMS_REQUEST });

  try {
    const { data } = await axios.get('/api/systems/get');

    dispatch({
      type: GET_ALL_SYSTEMS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_ALL_SYSTEMS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNewSystemAction = (info: any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: ADD_NEW_SYSTEM_REQUEST });
    try {
      const { data } = await axios.post(`/api/systems/create`, info);
  
      dispatch({
        type: ADD_NEW_SYSTEM_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ADD_NEW_SYSTEM_FAILURE,
        payload:
          error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
      });
    }
  };

  export const updateSystemAction = (id: string, info:any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    
    dispatch({ type: UPDATE_SYSTEM_REQUEST });
    try {
      const { data } = await axios.put(`/api/systems/system/update/${id}`, info);
      dispatch({
        type: UPDATE_SYSTEM_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_SYSTEM_FAILURE,
        payload:
        error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
      });
    }
  };
  
  export const deleteSystemAction = (id: Number) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: DELETE_SYSTEM_REQUEST })
    
    try {
      const { data } = await axios.delete(`/api/systems/system/delete/${id}`);
      dispatch({
        type: DELETE_SYSTEM_SUCCESS,
        payload: data,
      })
    } catch (error:any) {
      dispatch({
        type: DELETE_SYSTEM_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }