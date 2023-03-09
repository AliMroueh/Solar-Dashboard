import axios from "axios";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';

import {
    GET_ALL_SOLAR_REQUEST,
    GET_ALL_SOLAR_SUCCESS,
    GET_ALL_SOLAR_FAILURE,

    ADD_NEW_SOLAR_REQUEST,
    ADD_NEW_SOLAR_SUCCESS,
    ADD_NEW_SOLAR_FAILURE,

    UPDATE_SOLAR_REQUEST,
    UPDATE_SOLAR_SUCCESS,
    UPDATE_SOLAR_FAILURE,

    DELETE_SOLAR_REQUEST,
    DELETE_SOLAR_SUCCESS,
    DELETE_SOLAR_FAILURE,

    GET_ONE_SOLAR_REQUEST,
    GET_ONE_SOLAR_SUCCESS,
    GET_ONE_SOLAR_FAILURE
} from '../constants/solarConstants'


interface GetAllSolarRequestAction {
    type: 'GET_ALL_SOLAR_REQUEST';
  }
  
  interface GetAllSolarSuccessAction {
    type: 'GET_ALL_SOLAR_SUCCESS';
    payload: Solar[];
  }
  
  interface GetAllSolarFailAction {
    type: 'GET_ALL_SOLAR_FAILURE';
    payload: {
      error: string;
    };
  }
  
  type SolarAction = GetAllSolarRequestAction | GetAllSolarSuccessAction | GetAllSolarFailAction;
  
  // Define the Solar type
  interface Solar {
    // id: number;
    type: string;
    strength: string;
    description: number;
    solarImage:string
  }

  export const getallSolarAction = () => async (dispatch: Dispatch<SolarAction>) => {
    dispatch({ type: 'GET_ALL_SOLAR_REQUEST' });
  
    try {
      const { data } = await axios.get<{ solars: Solar[] }>('/api/solars/get');
  
      dispatch({
        type: 'GET_ALL_SOLAR_SUCCESS',
        payload: data.solars,
      });
    } catch (error:any) {
      dispatch({
        type: 'GET_ALL_SOLAR_FAILURE',
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

export const updateSolarAction = (id: Number, info:[]) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    
  dispatch({ type: UPDATE_SOLAR_REQUEST });

  

  try {
    const { data } = await axios.put(`/api/solars/solar/update/${id}`, info, {
     
    });

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
    const { data } = await axios.delete(`/api/solars/delete/${id}`, {
      
    });
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




