import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GET_ALL_CLIENTS_REQUEST,
  GET_ALL_CLIENTS_SUCCESS,
  GET_ALL_CLIENTS_FAILURE,
  ADD_NEW_CLIENT_REQUEST ,
  ADD_NEW_CLIENT_SUCCESS ,
  ADD_NEW_CLIENT_FAILURE ,
  UPDATE_CLIENT_REQUEST ,
  UPDATE_CLIENT_SUCCESS ,
  UPDATE_CLIENT_FAILURE ,
  DELETE_CLIENT_REQUEST ,
  DELETE_CLIENT_SUCCESS , 
  DELETE_CLIENT_FAILURE 
} from '../constants/clientConstants';

export const getAllClientsAction = () => async (dispatch: Dispatch) => {
  dispatch({ type: GET_ALL_CLIENTS_REQUEST });

  try {
    const { data } = await axios.get('/api/clients/get');

    dispatch({
      type: GET_ALL_CLIENTS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_ALL_CLIENTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addClientAction = (info: any) => async (dispatch: Dispatch) => {
    dispatch({ type: ADD_NEW_CLIENT_REQUEST });
  
    
    
    try {
      const { data } = await axios.post(`/api/clients/create`, info, {
      
      });
  
      dispatch({
        type: ADD_NEW_CLIENT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ADD_NEW_CLIENT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const updateClientAction = (id: Number, info:[]) => async (
    dispatch: Dispatch,
    
  ) => {
    dispatch({ type: UPDATE_CLIENT_REQUEST });
  
    
  
    try {
      const { data } = await axios.put(`/api/clients/client/update/${id}`, info, {
       
      });
  
      dispatch({
        type: UPDATE_CLIENT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_CLIENT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const deleteClientAction = (id: Number) => async (dispatch: Dispatch) => {
    dispatch({ type: DELETE_CLIENT_REQUEST })
    
    try {
      const { data } = await axios.delete(`/api/clients/delete/${id}`, {
        
      });
      dispatch({
        type: DELETE_CLIENT_SUCCESS,
        payload: data,
      })
    } catch (error:any) {
      dispatch({
        type: DELETE_CLIENT_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }