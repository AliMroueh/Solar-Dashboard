
import { navLinks } from "./NavDB";
import { activeNavItemState } from "./ActiveNavBarAtom";
import { useRecoilState } from "recoil";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="col-span-2 w-64 min-h-[90vh] pt-8 px-1 flex flex-col items-start justify-between bg-orange-400 ">
      <div className="space-y-8 w-full ">
        {navLinks.slice(0, 6).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
        {/* <div className="w-full border-t border-gray-200" />
          {navLinks.slice(5, 6).map((link) => (
            <NavItem link={link} key={link.id} />
          ))} */}
      </div>
      {/* <div className="xl:flex flex-col hidden  items-center justify-center space-y-4 px-4 py-4 ">
        <h1 className="text-xl w-full font-medium">
          Grow Your <br /> Saving Now!
        </h1>
        <p> Pick an investment strategy that reflexts your goals </p>
        <button className=" w-full py-2 px-3 bg-black text-white">
          Become a Pro
        </button>
      </div> */}
    </nav>
  );
}
type Link1 = {
    id: number;
    link: string;
    icon: JSX.Element;
    title: string;
  }
function NavItem({ link }: { link: Link1 }) {
  const [activeNav, setActiveNav] = useRecoilState<number>(activeNavItemState);
  return (
    <div
      onClick={() => setActiveNav(link.id)}
      key={link.id}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
       group hover:border-white border-l-4 border-transparent ${
         activeNav === link.id && "border-white  font-bold"
       } `}
    >
    
      <Link to={link.link} className='flex w-full'>
        <span className="mr-5"> {link.icon}</span>
        <h1
          className={`text-white text-l group-hover:text-white  xl:flex hidden ${
            activeNav === link.id && "text-white font-bold"
          }} `}
        >
          {link.title}
        </h1>
      </Link>
    </div>
  );
}

export default NavBar;
