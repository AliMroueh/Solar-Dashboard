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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
      <NavBar />
        <div className='grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full p-3'> 
          <Routes>
            <Route index element={<Home />}/>  
            <Route path="/AdminClients" element={<AdminSolarClients />}/>
            <Route path="/AdminSolarPanels" element={<AdminSolarPanels />}/>
            <Route path="/AdminSolarInverter" element={<AdminSolarInverter />}/>
            <Route path="/AdminSolarBatteries" element={<AdminSolarBatteries />}/>
            <Route path="/AddClient" element={<AddSolarClient />}/>
            <Route path="/AddSolarPanels" element={<AddSolarPanels />}/>
            <Route path="/AddBatteryPanel" element={<AddSolarBatteryPanels />}/>
            <Route path="/AddSolarInverter" element={<AddSolarInverter />}/>
            <Route path="/AddBatteryPanel" element={<AddSolarBatteryPanels />}/>
            <Route path="/EditSolarPanels/:id" element={<EditSolarPanels />}/>
            <Route path="/UpdateBatteryPanel/:id" element={<UpdateBatteryPanel/>}/>
            <Route path="/UpdateInverterPanel/:id" element={<UpdateInverterPanel/>}/>
            <Route path="/UpdateClient/:id" element={<UpdateSolarClient />}/>

          </Routes>
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
