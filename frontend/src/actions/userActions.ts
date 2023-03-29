// import Axios from "axios";
// import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"

// export const signin = (email, password) => async (dispatch) => {
//     dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
//     try{
//         const {data} = await Axios.post('/api/users/signin', {email, password});
//         dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
//         localStorage.setItem('userInfo', JSON.stringify(data));
//     }catch(error){
//         dispatch({type: USER_SIGNIN_FAIL,
//         payload: 
//         error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//         });
//     }
// };

// export const signout = () => (dispatch) => {
//     localStorage.removeItem('userInfo');
//     dispatch({type: USER_SIGNOUT});
//     document.location.href = '/signin';
// }

// export const registerAction = (name, email, password) => async (dispatch) => {
//     dispatch({type: USER_REGISTER_REQUEST, payload: {email, password}});
//     try{
//         const {data} = await Axios.post('/api/users/register', {name,email, password});
//         dispatch({type: USER_REGISTER_SUCCESS, payload: data});
//         dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
//         localStorage.setItem('userInfo', JSON.stringify(data));
//     }catch(error){
//         dispatch({type: USER_REGISTER_FAIL,
//         payload: 
//         error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//         });
//     }
// };

import Axios from "axios";
import { Dispatch } from "redux";
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants";

interface UserInfo {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

interface UpdUser {
  userId?: string,
  name: string,
  email: string,
  Newpassword: string,
  Oldpassword: string
}

interface SignInAction {
  type: typeof USER_SIGNIN_REQUEST | typeof USER_SIGNIN_SUCCESS | typeof USER_SIGNIN_FAIL | typeof USER_SIGNOUT;
  payload?: UserInfo | string | {};
}

interface RegisterAction {
  type: typeof USER_REGISTER_REQUEST | typeof USER_REGISTER_SUCCESS | typeof USER_REGISTER_FAIL | typeof USER_SIGNIN_SUCCESS;
  payload?: UserInfo | string | {};
}

interface UserDetailsAction {
  type: typeof USER_DETAILS_REQUEST | typeof USER_DETAILS_SUCCESS | typeof USER_DETAILS_FAIL;
  payload?: any;
}

interface UpdateUserProfileAction {
  type: typeof USER_UPDATE_PROFILE_REQUEST | typeof USER_UPDATE_PROFILE_SUCCESS | typeof USER_UPDATE_PROFILE_FAIL | typeof USER_SIGNIN_SUCCESS;
  payload?: UserInfo | string | {};
}

export const signin = (email: string, password: string) => async (dispatch: Dispatch<SignInAction>) => {
  dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
  try {
    const {data} = await Axios.post<UserInfo>('/api/users/signin', {email, password});
    dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch(error: any) {
    dispatch({type: USER_SIGNIN_FAIL, payload: 
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

export const signout = () => (dispatch: Dispatch<SignInAction>) => {
  localStorage.removeItem('userInfo');
  dispatch({type: USER_SIGNOUT});
  document.location.href = '/signin';
};

export const registerAction = (name: string, email: string, password: string) => async (dispatch: Dispatch<RegisterAction>) => {
  dispatch({type: USER_REGISTER_REQUEST, payload: {email, password}});
  try {
    const {data} = await Axios.post<UserInfo>('/api/users/register', {name, email, password});
    dispatch({type: USER_REGISTER_SUCCESS, payload: data});
    dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch(error: any) {
    dispatch({type: USER_REGISTER_FAIL, payload: 
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

export const detailsUser = (userId: string) => async (dispatch: Dispatch<UserDetailsAction>, getState: any) => {
  dispatch({type: USER_DETAILS_REQUEST, payload: userId});
  const {userSignin: {userInfo}} = getState();
  try{
      const {data} = await Axios.get(`/api/users/${userId}`
      , {
          // headers: {Authorization: `Bearer ${userInfo.token}`},
          headers: { Authorization: `Bearer ${userInfo.token}` },
      }
      );
      dispatch({type: USER_DETAILS_SUCCESS, payload: data});
  }catch(error: any){
      dispatch({type : USER_DETAILS_FAIL, 
      payload: 
      error.response && error.response.data.message
      ? error.response.data.message : error.message, 
      });
  }
}

export const updateUserProfile = (user: UpdUser) => async (dispatch: Dispatch<UpdateUserProfileAction>, getState: any) => {
  dispatch({type: USER_UPDATE_PROFILE_REQUEST, payload: user});
  const {userSignin: {userInfo}} = getState();
  try{
      const {data} = await Axios.put(`/api/users/profile`,user ,{
          headers: {Authorization: `Bearer ${userInfo.token}`},
      });
      dispatch({type: USER_UPDATE_PROFILE_SUCCESS, payload: data});
      dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
      localStorage.setItem('userInfo',JSON.stringify(data));
  }catch(error: any){
      dispatch({type : USER_UPDATE_PROFILE_FAIL, 
      payload: 
      error.response && error.response.data.message
      ? error.response.data.message : error.message, 
      });
  }
}