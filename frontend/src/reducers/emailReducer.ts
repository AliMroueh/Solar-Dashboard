
import {
    GET_EMAIL_REQUEST,
    GET_EMAIL_SUCCESS,
    GET_EMAIL_FAILURE,
    
  } from '../constants/emailConstants';
  



export interface emailState  {
    loading: boolean;
    email: string;
    error?: string;
    success?: boolean;
  }
  
  const initialState: emailState = {
    loading: false,
    email: '',
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
  