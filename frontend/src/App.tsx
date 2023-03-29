import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AdminSolarClients from "./screens/AdminClients";
import UpdateSolarClient from "./screens/UpdateClient";
import AddSolarClient from "./screens/AddClient";
import AdminSolarPanels from "./screens/AdminSolarPanels";
import AdminSolarInverter from "./screens/AdminSolarInverter";
import AddSolarPanels from "./screens/AddSolarPanels";
import AddSolarInverter from "./screens/AddSolarInverter";
import EditSolarPanels from "./screens/EditSolarPanels";
import UpdateBatteryPanel from "./screens/UpdateBatteryPanel";
import AdminSolarBatteries from "./screens/AdminSolarBatteries";
import UpdateInverterPanel from "./screens/UpdateInverterPanel";
import AddSolarBatteryPanels from "./screens/AddBatteryPanel";
import Home from "./screens/Home";

import AddUserSystem from "./screens/AddUserSystem";
import AdminSystem from "./screens/AdminSystem";
import UpdateUserSystem from "./screens/UpdateUserSystem";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen, { getUser, UserState } from "./screens/SigninScreen";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import SendEmail from "./screens/sendEmail";
import UpdateUser from "./screens/UpdateUser";

// function App() {
export default function App() : JSX.Element{

  const userSignin = useSelector<getUser,UserState>(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;

  return (
    <BrowserRouter>
      {userInfo && <Header />}
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
        {userInfo && <NavBar />}
        <div className='grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full '>
          <Routes>
            <Route path="/register" element={<RegisterScreen />}/>
            <Route path="/signin" element={<SigninScreen />}/>
            {/* <PrivateRoute path="/" element={<Home />} /> */}
            <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
            {/* <PrivateRoute path="/" element={<Home />}/>
            <PrivateRoute path="/AdminClients" element={<AdminSolarClients />}/>
            <PrivateRoute path="/AdminSolarPanels" element={<AdminSolarPanels />}/>
            <PrivateRoute path="/AdminSolarInverter" element={<AdminSolarInverter />}/>
            <PrivateRoute path="/AdminSolarBatteries" element={<AdminSolarBatteries />}/>
        <Route index element={
            <PrivateRoute path="/" element={<Home />}/>
          }/>   */}
            <Route path="/AdminClients" element={
              <PrivateRoute>
                <AdminSolarClients />
              </PrivateRoute>} />
            <Route path="/AdminSolarPanels" element={
              <PrivateRoute>
                <AdminSolarPanels />
              </PrivateRoute>} />
            <Route path="/AdminSolarInverter" element={<PrivateRoute>
              <AdminSolarInverter />
            </PrivateRoute>} />
            <Route path="/AdminSolarBatteries" element={<PrivateRoute>
            <AdminSolarBatteries />
            </PrivateRoute>}/>
            {/* <PrivateRoute path="/AddClient" element={<AddSolarClient />}/>
            <PrivateRoute path="/AddSolarPanels" element={<AddSolarPanels />}/>
            <PrivateRoute path="/AddBatteryPanel" element={<AddSolarBatteryPanels />}/>
            <PrivateRoute path="/AdminSolarInverter" element={<AdminSolarInverter />}/>
            <PrivateRoute path="/AdminSolarBatteries" element={<AdminSolarBatteries />}/> */}
            <Route path="/AddClient" element={
              <PrivateRoute>
                <AddSolarClient />
              </PrivateRoute>} />
            <Route path="/AddSolarPanels" element={
              <PrivateRoute>
                <AddSolarPanels />
              </PrivateRoute>} />
            <Route path="/AddBatteryPanel" element={
            <PrivateRoute>
              <AddSolarBatteryPanels />
              </PrivateRoute>}/>
            {/* <PrivateRoute path="/AddSolarInverter" element={<AddSolarInverter />}/>
            <PrivateRoute path="/AddBatteryPanel" element={<AddSolarBatteryPanels />}/>
            <PrivateRoute path="/EditSolarPanels/:id" element={<EditSolarPanels />}/>
            <PrivateRoute path="/UpdateBatteryPanel/:id" element={<UpdateBatteryPanel />}/>
            <PrivateRoute path="/UpdateInverterPanel/:id" element={<UpdateInverterPanel />}/> */}
            <Route path="/AddSolarInverter" element={
              <PrivateRoute>
                <AddSolarInverter />
              </PrivateRoute>} />
            <Route path="/AddBatteryPanel" element={
              <PrivateRoute>
                <AddSolarBatteryPanels />
              </PrivateRoute>} />
            <Route path="/EditSolarPanels/:id" element={<PrivateRoute>
              <EditSolarPanels />
            </PrivateRoute>} />
            <Route path="/UpdateBatteryPanel/:id" element={<PrivateRoute>
              <UpdateBatteryPanel />
            </PrivateRoute>} />
            <Route path="/UpdateInverterPanel/:id" element={<PrivateRoute>
            <UpdateInverterPanel/>
            </PrivateRoute>}/>
            {/* <PrivateRoute path="/UpdateClient/:id" element={<UpdateSolarClient />}/>
            <PrivateRoute path="/AddUserSystem" element={<AddUserSystem />}/>
            <PrivateRoute path="/UpdateUserSystem/:id" element={<UpdateUserSystem />}/>
            <PrivateRoute path="/AdminSystem" element={<AdminSystem />}/> */}
            <Route path="/UpdateClient/:id" element={
              <PrivateRoute>
                <UpdateSolarClient />
              </PrivateRoute>} />
            <Route path="/AddUserSystem" element={
              <PrivateRoute>
                <AddUserSystem />
              </PrivateRoute>} />
            <Route path="/UpdateUserSystem/:id" element={<PrivateRoute>
              <UpdateUserSystem />
            </PrivateRoute>} />
            {/* AdminSystem */}
            <Route path="/AdminSystem" element={
              <PrivateRoute>
                <AdminSystem />
              </PrivateRoute>} />
            <Route path="/email" element={
            <PrivateRoute>
              <SendEmail />
            </PrivateRoute>} />

            <Route path="/updateUser" element={
            <PrivateRoute>
              <UpdateUser />
            </PrivateRoute>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

// export default App;
