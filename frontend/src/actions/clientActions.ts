import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
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
import { RootState } from '../store';

export const getAllClientsAction = () : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_CLIENTS_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.get('/api/clients/get' ,{
      headers: { Authorization: `Bearer ${userInfo?.token}` },
    });

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

export const addClientAction = (info: any) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: ADD_NEW_CLIENT_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(`/api/clients/create`, info ,{
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      });
  
      dispatch({
        type: ADD_NEW_CLIENT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ADD_NEW_CLIENT_FAILURE,
        payload:
        error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
      });
    }
  };

  export const updateClientAction = (id: string, info:any) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
   
    dispatch({ type: UPDATE_CLIENT_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.put(`/api/clients/client/update/${id}`, info ,{
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      });
  
      dispatch({
        type: UPDATE_CLIENT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_CLIENT_FAILURE,
        payload:
        error.response.data.errors || (error.response && error.response.data.message ? error.response.data.message : error.message)
      });
    }
  };
  
  export const deleteClientAction = (id: Number) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: DELETE_CLIENT_REQUEST })
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/clients/client/delete/${id}` ,{
        headers: { Authorization: `Bearer ${userInfo?.token}` },
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