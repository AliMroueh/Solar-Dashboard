
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
    DELETE_BATTERY_FAILURE,
    UPDATE_BATTERY_RESET,
    ADD_NEW_BATTERY_RESET
    
  } from '../constants/batteryConstants';
  



export interface BatteryState  {
    loading?: boolean;
    batteries?: any[];
    error?: any[] | string | null;
    success?: boolean;
  }
  
  const initialState: BatteryState = {
    loading: false,
    batteries: [],
    error: [],
    success: false
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
        return { loading: true, success: false };
  
      case ADD_NEW_BATTERY_SUCCESS:
        return { loading: false, batteries:[action.payload], success: true };
  
      case ADD_NEW_BATTERY_FAILURE:
        return { loading: false, error: action.payload };
      
      case ADD_NEW_BATTERY_RESET:
        return {};
  
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
        return { loading: true, success: false };
  
      case UPDATE_BATTERY_SUCCESS:
        return { loading: false, batteries: action.payload, success: true };
  
      case UPDATE_BATTERY_FAILURE:
        return { loading: false, error: action.payload };

        case UPDATE_BATTERY_RESET:
          return {};
  
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
        return { loading: true };
  
        case DELETE_BATTERY_SUCCESS:
            return { loading: false, success: true};
          
  
      case DELETE_BATTERY_FAILURE:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  