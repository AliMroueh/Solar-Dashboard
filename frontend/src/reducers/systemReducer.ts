
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
    DELETE_SYSTEM_FAILURE
    
  } from '../constants/systemConstant;
  



export interface SystemState  {
    loading: boolean;
    systems: any[];
    error?: any[];
    success?: boolean;
  }
  
  const initialState: SystemState = {
    loading: false,
    systems: [],
    error: []
  };
  
 export const getAllSystemsReducer = (
    state: SystemState = initialState,
    action: any
  ): SystemState => {
    switch (action.type) {
      case GET_ALL_SYSTEMS_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_SYSTEMS_SUCCESS:
        return { ...state, loading: false,  systems: action.payload };
  
      case GET_ALL_SYSTEMS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
 export const addSystemReducer = (
    state: SystemState = initialState,
    action: any
  ): SystemState => {
    switch (action.type) {
      case ADD_NEW_SYSTEM_REQUEST:
        return { ...state, loading: true };
  
      case ADD_NEW_SYSTEM_SUCCESS:
        return { ...state, loading: false, systems: [...state.systems, action.payload] };
  
      case ADD_NEW_SYSTEM_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

 export const updateSystemReducer = (
    state = initialState,
    action: any
  ): SystemState => {
    switch (action.type) {
      case UPDATE_SYSTEM_REQUEST:
        return { ...state, loading: true };
  
      case UPDATE_SYSTEM_SUCCESS:
        return { loading: false, systems: action.payload };
  
      case UPDATE_SYSTEM_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  export const deleteSystemReducer = (
    state = initialState,
    action: any
  ): SystemState => {
    switch (action.type) {
      case DELETE_SYSTEM_REQUEST:
        return { ...state, loading: true };
  
        case DELETE_SYSTEM_SUCCESS:
            return { ...state, loading: false, success: true};
          
  
      case DELETE_SYSTEM_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  