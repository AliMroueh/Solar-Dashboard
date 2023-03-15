
import {
    GET_ALL_INVERTERS_REQUEST,
    GET_ALL_INVERTERS_SUCCESS,
    GET_ALL_INVERTERS_FAILURE,

    ADD_NEW_INVERTER_REQUEST,
    ADD_NEW_INVERTER_SUCCESS,
    ADD_NEW_INVERTER_FAILURE,

    UPDATE_INVERTER_REQUEST,
    UPDATE_INVERTER_SUCCESS,
    UPDATE_INVERTER_FAILURE,

    DELETE_INVERTER_REQUEST,
    DELETE_INVERTER_SUCCESS,
    DELETE_INVERTER_FAILURE,


  
  } from '../constants/inverterConstants';
  



 export interface InverterState  {
    loading: boolean;
    inverters: any[];
    error?: any[];
    success?: boolean;
  }
  
  const initialState: InverterState = {
    loading: false,
    inverters: [],
    error: []
  };
  
 export const getAllInverterReducer = (
    state: InverterState = initialState,
    action: any
  ): InverterState => {
    switch (action.type) {
      case GET_ALL_INVERTERS_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_INVERTERS_SUCCESS:
        return { ...state, loading: false, inverters: action.payload };
  
      case GET_ALL_INVERTERS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
 export const addInverterReducer = (
    state: InverterState = initialState,
    action: any
  ): InverterState => {
    switch (action.type) {
      case ADD_NEW_INVERTER_REQUEST:
        return { ...state, loading: true };
  
      case ADD_NEW_INVERTER_SUCCESS:
        return { ...state, loading: false, inverters: [...state.inverters, action.payload] };
  
      case ADD_NEW_INVERTER_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

 export const updateInverterReducer = (
    state = initialState,
    action: any
  ): InverterState => {
    switch (action.type) {
      case UPDATE_INVERTER_REQUEST:
        return { ...state, loading: true };
  
      case UPDATE_INVERTER_SUCCESS:
        return { loading: false, inverters: action.payload };
  
      case UPDATE_INVERTER_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  export const deleteInverterReducer = (
    state = initialState,
    action: any
  ): InverterState => {
    switch (action.type) {
      case DELETE_INVERTER_REQUEST:
        return { ...state, loading: true };
  
        case DELETE_INVERTER_SUCCESS:
            return { ...state, loading: false, success: true};
          
  
      case DELETE_INVERTER_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  