
import { isExportDeclaration } from 'typescript';
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
  



export interface ClientState  {
    loading: boolean;
    clients: any[];
    error?: any[];
    success?: boolean;
  }
  
  const initialState: ClientState = {
    loading: false,
    clients: [],
    error: []
  };
  
 export const getAllClientsReducer = (
    state: ClientState = initialState,
    action: any
  ): ClientState => {
    switch (action.type) {
      case GET_ALL_CLIENTS_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_CLIENTS_SUCCESS:
        return { ...state, loading: false, clients: action.payload };
  
      case GET_ALL_CLIENTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
 export const addClientReducer = (
    state: ClientState = initialState,
    action: any
  ): ClientState => {
    switch (action.type) {
      case ADD_NEW_CLIENT_REQUEST:
        return { ...state, loading: true };
  
      case ADD_NEW_CLIENT_SUCCESS:
        return { ...state, loading: false, clients: [...state.clients, action.payload] };
  
      case ADD_NEW_CLIENT_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

 export const updateClientReducer = (
    state = initialState,
    action: any
  ): ClientState => {
    switch (action.type) {
      case UPDATE_CLIENT_REQUEST:
        return { ...state, loading: true };
  
      case UPDATE_CLIENT_SUCCESS:
        return { loading: false, clients: action.payload };
  
      case  UPDATE_CLIENT_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  export const deleteClientReducer = (
    state = initialState,
    action: any
  ): ClientState => {
    switch (action.type) {
      case DELETE_CLIENT_REQUEST:
        return { ...state, loading: true };
  
        case DELETE_CLIENT_SUCCESS:
            return { ...state, loading: false, success: true};
          
  
      case DELETE_CLIENT_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  