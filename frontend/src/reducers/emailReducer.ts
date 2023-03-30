
import {
    GET_EMAIL_REQUEST,
    GET_EMAIL_SUCCESS,
    GET_EMAIL_FAILURE,
    GET_EMAIL_FAILURE1,
    GET_EMAIL_REQUEST1,
    GET_EMAIL_SUCCESS1,
    
  } from '../constants/emailConstants';
  



export interface emailState  {
    loading: boolean;
    email?: string;
    email1?: string;
    error?: string;
    success?: boolean;
  }
  
  const initialState: emailState = {
    loading: false,
    email: '',
    email1: '',
    error: undefined
  };
  
 export const sendEmailReducer = (
    state: emailState = initialState,
    action: any
  ): emailState => {
    switch (action.type) {
      case GET_EMAIL_REQUEST:
        return { ...state, loading: true };
  
      case GET_EMAIL_SUCCESS:
        return { ...state, loading: false, email: action.payload };
  
      case GET_EMAIL_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const sendEmailReducer1 = (
    state: emailState = initialState,
    action: any
  ): emailState => {
    switch (action.type) {
      case GET_EMAIL_REQUEST1:
        return { ...state, loading: true };
  
      case GET_EMAIL_SUCCESS1:
        return { ...state, loading: false, email: action.payload };
  
      case GET_EMAIL_FAILURE1:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };