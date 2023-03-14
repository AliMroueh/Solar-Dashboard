import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
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

export const getAllClientsAction = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
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

export const addClientAction = (info: any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: ADD_NEW_CLIENT_REQUEST });
  
    
    
    try {
      const { data } = await axios.post(`/api/clients/create`, info);
  
      dispatch({
        type: ADD_NEW_CLIENT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ADD_NEW_CLIENT_FAILURE,
        payload:
        error.response.data.errors 
      });
    }
  };

  export const updateClientAction = (id: string, info:any) => async (  dispatch: ThunkDispatch<{}, {}, AnyAction>, ) => {
   
    dispatch({ type: UPDATE_CLIENT_REQUEST });
  
    
  
    try {
      const { data } = await axios.put(`/api/clients/client/update/${id}`, info);
  
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
  
  export const deleteClientAction = (id: Number) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: DELETE_CLIENT_REQUEST })
    
    try {
      const { data } = await axios.delete(`/api/clients/client/delete/${id}`);
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