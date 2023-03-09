import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import SolarPanels from "./screens/AddSolarPanels";
import SolarBatteries from "./screens/SolarPanelAdmin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
      <NavBar />
        <div className='grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full'> 
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/AddSolarPanels" element={<SolarPanels />}/>
            <Route path="/SolarPanelAdmin" element={<SolarBatteries />}/>
          </Routes>
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
