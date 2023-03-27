// import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT} from "../constants/userConstants";

// export const userSigninReducer = (state = {}, action) => {
//     switch(action.type){
//         case USER_SIGNIN_REQUEST:
//             return {loading: true};
//         case USER_SIGNIN_SUCCESS:
//             return {loading: false, userInfo: action.payload};
//         case USER_SIGNIN_FAIL:
//             return {loading: false, error: action.payload};
//         case USER_SIGNOUT:
//             return {};
//         default:
//             return state;
//     }
// }

// export const userRegisterReducer = (state = {}, action) => {
//     switch(action.type){
//         case USER_REGISTER_REQUEST:
//             return {loading: true};
//         case USER_REGISTER_SUCCESS:
//             return {loading: false, userInfo: action.payload};
//         case USER_REGISTER_FAIL:
//             return {loading: false, error: action.payload};
//         default:
//             return state;
//     }
// }


import { 
    USER_REGISTER_FAIL, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNOUT
  } from "../constants/userConstants";
  
  interface UserSigninState {
    loading?: boolean;
    error?: string;
    userInfo?: UserInfo;
  }
  
  interface UserInfo {
    id: string;
    name: string;
    email: string;
    token: string;
  }
  
  interface UserRegisterState {
    loading?: boolean;
    error?: string;
    userInfo?: UserInfo;
  }
  
  interface UserAction {
    type: string;
    payload?: any;
  }
  
  export const userSigninReducer = (state: UserSigninState = {}, action: UserAction): UserSigninState => {
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading: true};
        case USER_SIGNIN_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_SIGNIN_FAIL:
            return {loading: false, error: action.payload};
        case USER_SIGNOUT:
            return {};
        default:
            return state;
    }
  }
  
  export const userRegisterReducer = (state: UserRegisterState = {}, action: UserAction): UserRegisterState => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
  }
  