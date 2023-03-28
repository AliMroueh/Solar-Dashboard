// import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import thunk from "redux-thunk";
// // import { addSolarReducer, deleteSolarReducer, getallSolarReducer, updateSolarReducer } from "./reducers/solarReducer";
// import { addInverterReducer, deleteInverterReducer, getAllInverterReducer, updateInverterReducer } from "./reducers/inverterReducer";
// import { getAllBatteriesReducer,addBatteryReducer,updateBatteryReducer,deleteBatteryReducer } from "./reducers/batteryReducer";
// import { getAllClientsReducer,addClientReducer,updateClientReducer,deleteClientReducer } from "./reducers/clientReducer";
// import { addSolarReducer, deleteSolarReducer, getAllSolarReducer, updateSolarReducer } from "./reducers/solarReducer";
// import { sendEmailReducer } from "./reducers/emailReducer";
// import { getAllSystemsReducer,addSystemReducer,updateSystemReducer,deleteSystemReducer } from "./reducers/systemReducer";
// import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";


// // const initialState = {
// //     userSignin: {
// //         userInfo: localStorage.getItem("userInfo")
// //             ? JSON.parse(localStorage.getItem("userInfo") as string)
// //             : null,
// //     },
// // };

// interface UserSigninState {
//     userInfo: string | null;
//   }
  
//   interface AppState {
//     userSignin: UserSigninState;
//   }
  
//   const initialState: AppState = {
//     userSignin: {
//       userInfo: localStorage.getItem('userInfo')
//         ? JSON.parse(localStorage.getItem('userInfo')!)
//         : null,
//     },
//   };
  
// const reducer = combineReducers({
//     userSignin: userSigninReducer,
//     userRegister: userRegisterReducer,
//     getAllSolars:getAllSolarReducer,
//     addSolar:addSolarReducer,
//     updateSolar:updateSolarReducer,
//     deleteSolar:deleteSolarReducer,


//     getAllInverter:getAllInverterReducer,
//     addInverter:addInverterReducer,
//     updateInverter:updateInverterReducer,
//     deleteInverter:deleteInverterReducer,

//     getAllBatteries:getAllBatteriesReducer,
//     addBattery:addBatteryReducer,
//     updateBattery:updateBatteryReducer,
//     deleteBattery:deleteBatteryReducer,

//     getAllSystems:getAllSystemsReducer,
//     addSystem:addSystemReducer,
//     updateSystem:updateSystemReducer,
//     deleteSystem:deleteSystemReducer,

    
//     getAllClients:getAllClientsReducer,
//     addClient:addClientReducer,
//     updateClient:updateClientReducer,
//     deleteClient:deleteClientReducer,

//     sendEmail: sendEmailReducer



// })




// const composeEnhancer =
// //  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 
//  compose;
// const store = createStore(
//     reducer,
//     initialState,
//     composeEnhancer(applyMiddleware(thunk)));

// export default store;



import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { addInverterReducer, deleteInverterReducer, getAllInverterReducer, updateInverterReducer } from "./reducers/inverterReducer";
import { getAllBatteriesReducer, addBatteryReducer, updateBatteryReducer, deleteBatteryReducer } from "./reducers/batteryReducer";
import { getAllClientsReducer, addClientReducer, updateClientReducer, deleteClientReducer } from "./reducers/clientReducer";
import { addSolarReducer, deleteSolarReducer, getAllSolarReducer, updateSolarReducer } from "./reducers/solarReducer";
import { sendEmailReducer } from "./reducers/emailReducer";
import { getAllSystemsReducer, addSystemReducer, updateSystemReducer, deleteSystemReducer, SysSummaryReducer } from "./reducers/systemReducer";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";

export interface userInfo {
    id: string,
    name: string,
    email: string,
    rToken: string,
    token: string

}
interface UserSigninState {
  userInfo: userInfo;
}

export interface RootState {
  userSignin: UserSigninState;
  // Add more state properties here if you have any
}

const initialState: RootState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo')!)
      : null,
  },
  // Set initial state for other state properties here if you have any
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  getAllSolars: getAllSolarReducer,
  addSolar: addSolarReducer,
  updateSolar: updateSolarReducer,
  deleteSolar: deleteSolarReducer,

  getAllInverter: getAllInverterReducer,
  addInverter: addInverterReducer,
  updateInverter: updateInverterReducer,
  deleteInverter: deleteInverterReducer,

  getAllBatteries: getAllBatteriesReducer,
  addBattery: addBatteryReducer,
  updateBattery: updateBatteryReducer,
  deleteBattery: deleteBatteryReducer,

  getAllSystems: getAllSystemsReducer,
  addSystem: addSystemReducer,
  updateSystem: updateSystemReducer,
  deleteSystem: deleteSystemReducer,

  getAllClients: getAllClientsReducer,
  addClient: addClientReducer,
  updateClient: updateClientReducer,
  deleteClient: deleteClientReducer,

  sendEmail: sendEmailReducer,
  SysSummary: SysSummaryReducer
});

const middleware = [thunk as ThunkMiddleware<RootState, any>];

const composeEnhancer = compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
