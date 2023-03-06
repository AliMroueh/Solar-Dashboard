import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { addSolarReducer, deleteSolarReducer, getallSolarReducer, updateSolarReducer } from "./reducers/solarReducer";


const initialState = {
    // userSignin: {
    //     userInfo: localStorage.getItem("userInfo")
    //         ? JSON.parse(localStorage.getItem("userInfo") as string)
    //         : null,
    // },
};
const reducer = combineReducers({
    // userSignin: userSigninReducer,
    // userRegister: userRegisterReducer,
    getallSolar:getallSolarReducer,
    addSolar:addSolarReducer,
    updateSolar:updateSolarReducer,
    deleteSolar:deleteSolarReducer,
})



const composeEnhancer =
//  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 
 compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;
