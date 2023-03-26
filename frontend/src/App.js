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
import SigninScreen from "./screens/SigninScreen";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;

  return (
    <BrowserRouter>
      {userInfo && <Header />}
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
      {userInfo && <NavBar />}
        <div className='grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full p-3'> 
          <Routes>
            <Route path="/register" element={<RegisterScreen />}/>
            <Route path="/signin" element={<SigninScreen />}/>
            <Route index element={
            <PrivateRoute>
            <Home />
            </PrivateRoute>}/>  
            <Route path="/AdminClients" element={
            <PrivateRoute>
              <AdminSolarClients />
          </PrivateRoute>}/>
            <Route path="/AdminSolarPanels" element={
            <PrivateRoute>
            <AdminSolarPanels />
            </PrivateRoute>}/>
            <Route path="/AdminSolarInverter" element={<PrivateRoute>
            <AdminSolarInverter />
            </PrivateRoute>}/>
            <Route path="/AdminSolarBatteries" element={<PrivateRoute>
            <AdminSolarBatteries />
            </PrivateRoute>}/>
            <Route path="/AddClient" element={
            <PrivateRoute>
            <AddSolarClient />
            </PrivateRoute>}/>
            <Route path="/AddSolarPanels" element={
            <PrivateRoute>
              <AddSolarPanels />
              </PrivateRoute>}/>
            <Route path="/AddBatteryPanel" element={
            <PrivateRoute>
              <AddSolarBatteryPanels />
              </PrivateRoute>}/>
            <Route path="/AddSolarInverter" element={
            <PrivateRoute>
            <AddSolarInverter />
            </PrivateRoute>}/>
            <Route path="/AddBatteryPanel" element={
            <PrivateRoute>
            <AddSolarBatteryPanels />
            </PrivateRoute>}/>
            <Route path="/EditSolarPanels/:id" element={<PrivateRoute>
            <EditSolarPanels />
            </PrivateRoute>}/>
            <Route path="/UpdateBatteryPanel/:id" element={<PrivateRoute>
            <UpdateBatteryPanel/>
            </PrivateRoute>}/>
            <Route path="/UpdateInverterPanel/:id" element={<PrivateRoute>
            <UpdateInverterPanel/>
            </PrivateRoute>}/>
            <Route path="/UpdateClient/:id" element={
            <PrivateRoute>
            <UpdateSolarClient />
            </PrivateRoute>}/>
            <Route path="/AddUserSystem" element={
            <PrivateRoute>
            <AddUserSystem />
            </PrivateRoute>}/>
            <Route path="/UpdateUserSystem/:id" element={<PrivateRoute>
            <UpdateUserSystem />
            </PrivateRoute>}/>
            {/* AdminSystem */}
            <Route path="/AdminSystem" element={
            <PrivateRoute>
              <AdminSystem />
              </PrivateRoute>}/>
          </Routes>
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
