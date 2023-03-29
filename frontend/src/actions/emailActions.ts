import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import {
  GET_EMAIL_REQUEST,
  GET_EMAIL_SUCCESS,
  GET_EMAIL_FAILURE,
} from '../constants/emailConstants';



export const sendEmailAction = (name:string,email:string,subject:string,message: string) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: GET_EMAIL_REQUEST });

  try {
    const { data } = await axios.post('/api/email',{name,email,subject, message});

    dispatch({
      type: GET_EMAIL_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_EMAIL_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
