// import { getallSolarAction } from '../actions/solarActions';
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


   
  } from '../constants/solarConstants';
  



 export interface SolarState  {
    loading: boolean;
    solars: any[];
    error?: string;
    success?: boolean;
  }
  
  const initialState: SolarState = {
    loading: false,
    solars: [],
    error: undefined
  };
  
 export const getAllSolarReducer = (
    state: SolarState = initialState,
    action: any
  ): SolarState => {
    switch (action.type) {
      case GET_ALL_SOLARS_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_SOLARS_SUCCESS:
        return { ...state, loading: false, solars: action.payload };
  
      case GET_ALL_SOLARS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
 export const addSolarReducer = (
    state: SolarState = initialState,
    action: any
  ): SolarState => {
    switch (action.type) {
      case ADD_NEW_SOLAR_REQUEST:
        return { ...state, loading: true };
  
      case ADD_NEW_SOLAR_SUCCESS:
        return { ...state, loading: false, solars: [...state.solars, action.payload] };
  
      case ADD_NEW_SOLAR_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

 export const updateSolarReducer = (
    state = initialState,
    action: any
  ): SolarState => {
    switch (action.type) {
      case UPDATE_SOLAR_REQUEST:
        return { ...state, loading: true };
  
      case UPDATE_SOLAR_SUCCESS:
        return { loading: false, solars: action.payload };
  
      case UPDATE_SOLAR_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  export const deleteSolarReducer = (
    state = initialState,
    action: any
  ): SolarState => {
    switch (action.type) {
      case DELETE_SOLAR_REQUEST:
        return { ...state, loading: true };
  
        case DELETE_SOLAR_SUCCESS:
            return { ...state, loading: false, success: true};
          
  
      case DELETE_SOLAR_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  