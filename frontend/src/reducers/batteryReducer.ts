
import {
    GET_ALL_BATTERIES_REQUEST,
    GET_ALL_BATTERIES_SUCCESS,
    GET_ALL_BATTERIES_FAILURE,

    ADD_NEW_BATTERY_REQUEST,
    ADD_NEW_BATTERY_SUCCESS,
    ADD_NEW_BATTERY_FAILURE,

    UPDATE_BATTERY_REQUEST,
    UPDATE_BATTERY_SUCCESS,
    UPDATE_BATTERY_FAILURE,

    DELETE_BATTERY_REQUEST,
    DELETE_BATTERY_SUCCESS,
    DELETE_BATTERY_FAILURE
    
  } from '../constants/batteryConstants';
  



export interface BatteryState  {
    loading: boolean;
    batteries: any[];
    error?: string;
    success?: boolean;
  }
  
  const initialState: BatteryState = {
    loading: false,
    batteries: [],
    error: undefined
  };
  
 export const getAllBatteriesReducer = (
    state: BatteryState = initialState,
    action: any
  ): BatteryState => {
    switch (action.type) {
      case GET_ALL_BATTERIES_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_BATTERIES_SUCCESS:
        return { ...state, loading: false, batteries: action.payload };
  
      case GET_ALL_BATTERIES_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
 export const addBatteryReducer = (
    state: BatteryState = initialState,
    action: any
  ): BatteryState => {
    switch (action.type) {
      case ADD_NEW_BATTERY_REQUEST:
        return { ...state, loading: true };
  
      case ADD_NEW_BATTERY_SUCCESS:
        return { ...state, loading: false, batteries: [...state.batteries, action.payload] };
  
      case ADD_NEW_BATTERY_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

 export const updateBatteryReducer = (
    state = initialState,
    action: any
  ): BatteryState => {
    switch (action.type) {
      case UPDATE_BATTERY_REQUEST:
        return { ...state, loading: true };
  
      case UPDATE_BATTERY_SUCCESS:
        return { loading: false, batteries: action.payload };
  
      case UPDATE_BATTERY_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  export const deleteBatteryReducer = (
    state = initialState,
    action: any
  ): BatteryState => {
    switch (action.type) {
      case DELETE_BATTERY_REQUEST:
        return { ...state, loading: true };
  
        case DELETE_BATTERY_SUCCESS:
            return { ...state, loading: false, success: true};
          
  
      case DELETE_BATTERY_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  