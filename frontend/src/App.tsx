import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import AddSolarPanels from "./screens/AddSolarPanels";
import AdminSolarPanels from "./screens/AdminSolarPanels";
import AdminSolarBatteries from "./screens/AdminSolarBatteries";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
      <NavBar />
        <div className='grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full'> 
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/AddSolarPanels" element={<AddSolarPanels />}/>
            <Route path="/AdminSolarPanels" element={<AdminSolarPanels/>}/>
            <Route path="/AdminSolarBatteries" element={<AdminSolarBatteries/>}/>

          </Routes>
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
