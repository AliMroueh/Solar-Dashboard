import React from "react";
import {
  BellIcon,
  InboxIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import SearchIcon from "./SearchIcon";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { signout } from "../actions/userActions";

function Header() {

  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const Signout = () => {
    dispatch(signout())
  }
  return (
    <div className=" w-full py-6 
    bg-gradient-to-r from-slate-50 via-slate-50 to-slate-400
    items-center justify-between flex px-12">
      {/* search */}
      {/* <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2 visibility:hidden">

        <SearchIcon/>

        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent outline-none"
        />
      </div> */}
      {/* logo */}
      <div className="items-center w-full flex space-x-4">
        {/* <ChipIcon className="w-6 h-6" /> */}
        <h1 className="text-xl text-gray-900 font-medium "> Solar System </h1>
      </div>
      {/* icons */}
      <div className="items-center justify-end space-x-6 flex w-full">
        <BellIcon className="header-icon" />
        <InboxIcon className="header-icon" />
        <UserCircleIcon className="header-icon" />
        <button onClick={Signout}>Sign Out</button>
      </div>
    </div>
  );
}

export default Header;
