import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import {
  GET_EMAIL_REQUEST,
  GET_EMAIL_SUCCESS,
  GET_EMAIL_FAILURE,
} from '../constants/emailConstants';



export const sendEmailAction = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: GET_EMAIL_REQUEST });

  try {
    const { data } = await axios.post('/api/email');

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
