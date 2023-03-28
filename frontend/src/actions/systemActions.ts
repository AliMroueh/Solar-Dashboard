import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store'; 
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
  DELETE_SYSTEM_FAILURE,
  SYS_SUMMARY_REQUEST,
  SYS_SUMMARY_SUCCESS,
  SYS_SUMMARY_FAILURE
} from '../constants/systemConstants';



export const getAllSystemsAction = () : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_SYSTEMS_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.get('/api/systems/get', {
      headers: { Authorization: `Bearer ${userInfo?.token}` },
    });

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

export const addSystemAction = ({info}: any) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: ADD_NEW_SYSTEM_REQUEST });

    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(`/api/systems/create`, info, {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      });
  
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

  export const updateSystemAction = (id: string, {info}:any) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    
    dispatch({ type: UPDATE_SYSTEM_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.put(`/api/systems/update/${id}`, info, {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      });
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
  
  export const deleteSystemAction = (id: Number) : ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: DELETE_SYSTEM_REQUEST })
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/systems/delete/${id}`, {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      });
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

  // export const summarySys = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState : GetState) => {
  //   dispatch({ type: SYS_SUMMARY_REQUEST });
  //   const {
  //     userSignin: { userInfo },
  //   } = getState();
  //   try {
  //     const { data } = await axios.get('/api/systems/summary', {
  //       headers: { Authorization: `Bearer ${userInfo.token}` },
  //     });
  //     dispatch({ type: SYS_SUMMARY_SUCCESS, payload: data });
  //   } catch (error: any) {
  //     dispatch({
  //       type: SYS_SUMMARY_FAILURE,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     });
  //   }
  // };

  export const summarySys = (): ThunkAction<void, RootState, null, AnyAction> => async (dispatch, getState) => {
    dispatch({ type: SYS_SUMMARY_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.get('/api/systems/summary', {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      });
      dispatch({ type: SYS_SUMMARY_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: SYS_SUMMARY_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };