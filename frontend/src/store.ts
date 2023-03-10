import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import { addSolarReducer, deleteSolarReducer, getallSolarReducer, updateSolarReducer } from "./reducers/solarReducer";
import { addInverterReducer, deleteInverterReducer, getAllInverterReducer, updateInverterReducer } from "./reducers/inverterReducer";
import { getAllBatteriesReducer,addBatteryReducer,updateBatteryReducer,deleteBatteryReducer } from "./reducers/batteryReducer";
import { getAllClientsReducer,addClientReducer,updateClientReducer,deleteClientReducer } from "./reducers/clientReducer";
import { addSolarReducer, deleteSolarReducer, getAllSolarsReducer, updateSolarReducer } from "./reducers/solarReducer";
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
    getAllSolars:getAllSolarsReducer,
    addSolar:addSolarReducer,
    updateSolar:updateSolarReducer,
    deleteSolar:deleteSolarReducer,
    getallInverter:getAllInverterReducer,
    addInverter:addInverterReducer,
    updateInverter:updateInverterReducer,
    deleteInverter:deleteInverterReducer,
    getAllBatteries:getAllBatteriesReducer,
    addBattery:addBatteryReducer,
    updateBattery:updateBatteryReducer,
    deleteBattery:deleteBatteryReducer,
    getAllClients:getAllClientsReducer,
    addClient:addClientReducer,
    updateClient:updateClientReducer,
    deleteClient:deleteClientReducer



})




const composeEnhancer =
//  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 
 compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;
