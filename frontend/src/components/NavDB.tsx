import { 
    CogIcon,  
    ShoppingCartIcon,  
    UserIcon } from "@heroicons/react/24/outline";

export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    link:"/",
    icon: <ShoppingCartIcon className="nav-icon" />,
  },
  {
    id: 1,
    title: "Solar Panel",
    link:"/AdminSolarPanels",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 2,
    title: "Solar Inverter",
    link:"/AdminSolarInverter",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 3,
    title: "Solar Inverters",
    link:"/solarInverters",
    icon: <UserIcon className="nav-icon" />,
  },  
  {
    id: 4,
    title: "Solar System",
    link:"/solarSystem",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 5,
    title: "Settings",
    link:"/",
    icon: <CogIcon className="nav-icon" />,
  },
];
