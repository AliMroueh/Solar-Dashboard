import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
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


// get solar
  export const getAllSolarAction = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: GET_ALL_SOLARS_REQUEST });
  
    try {
      const { data } = await axios.get('/api/solars/get')

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

export const addSolarAction =  (info: any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {

    dispatch({ type: ADD_NEW_SOLAR_REQUEST })
    try {
        const { data } = await axios.post(`/api/solars/create`, info);
          dispatch({
            type: ADD_NEW_SOLAR_SUCCESS,
            payload: data,
        });
    } catch (error:any) {

        dispatch({
            type: ADD_NEW_SOLAR_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


// edit 

export const updateSolarAction = (id: string, info:any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: UPDATE_SOLAR_REQUEST });
  try {
    const { data } = await axios.put(`/api/solars/solar/update/${id}`,info);
    dispatch({
      type: UPDATE_SOLAR_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: UPDATE_SOLAR_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteSolarAction = (id: Number) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: DELETE_SOLAR_REQUEST })
  
  try {
    const { data } = await axios.delete(`/api/solars/solar/delete/${id}`);
    dispatch({
      type: DELETE_SOLAR_SUCCESS,
      payload: data,
    })
  } catch (error:any) {
    dispatch({
      type: DELETE_SOLAR_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}




