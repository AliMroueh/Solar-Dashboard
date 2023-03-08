import axios from "axios";
import { stringify } from "querystring";
import { Dispatch } from "redux";

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
      const { data } = await axios.get<{ solars: Solar[] }>('/api/solar/get');
  
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
// export const getallSolarAction = () => async (dispatch) => {
//     dispatch({ type: GET_ALL_SOLAR_REQUEST })

//     try {

//         const { data } = await axios.get('/api/solar/get')

//         dispatch({
//             type: GET_ALL_SOLAR_SUCCESS,
//             payload: data,
//         })
//     } catch (error:any) {

//         dispatch({
//             type: GET_ALL_SOLAR_FAILURE,
//             payload: error.response && error.response.data.message ? error.response.data.message : error.message
//         })
//     }
// }

//insert category

export const addSolarAction = (info: any) => async (dispatch: (arg0: { type: string; payload?: any; }) => void, getState: () => { userSignin: { userInfo: any; }; }) => {
    dispatch({ type: ADD_NEW_SOLAR_REQUEST })

    const { userSignin: { userInfo } } = getState();
    try {

        const { data } = await axios.post(`/api/solar/create`, info, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
            // headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` } 
        })


        dispatch({
            type: ADD_NEW_SOLAR_SUCCESS,
            payload: data,
        })
    } catch (error:any) {

        dispatch({
            type: ADD_NEW_SOLAR_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



// UPDATE 
export const updateSolarAction = (id: any, info: any) => async (dispatch: (arg0: { type: string; payload?: any; }) => void, getState: () => { userSignin: { userInfo: any; }; }) => {

    dispatch({ type: UPDATE_SOLAR_REQUEST })
    const { userSignin: { userInfo } } = getState();
    try {


        const { data } = await axios.put(`/api/solars/solar/update/${id}`, info, { headers: { Authorization: `Bearer ${userInfo.token}` }, })


        dispatch({
            type: UPDATE_SOLAR_SUCCESS,
            payload: data,
        
        })
    } catch (error:any) {

        dispatch({
            type: UPDATE_SOLAR_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



//DELTE
export const deleteSolarAction = (id: any) => async (dispatch: (arg0: { type: string; payload?: any; }) => void, getState: () => { userSignin: { userInfo: any; }; }) => {
    dispatch({ type: DELETE_SOLAR_REQUEST })
    const { userSignin: { userInfo } } = getState();
    try {


        const { data } = await axios.delete(`/api/solars/delete/${id}`, { headers: { Authorization: `Bearer ${userInfo.token}` }, })



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




