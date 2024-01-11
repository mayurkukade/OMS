import React from "react";
import { Link } from "react-router-dom";
import {
    Menu,
    MenuHandler,
    MenuList,
  } from "@material-tailwind/react";
  import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Dashboardsidebar() {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);
    const [openMenu4, setOpenMenu4] = React.useState(false);


  return (
    <div>
      <div className=" mt-5 sm:flex hidden ml-2 ">
        <div className="border border-gray-300 rounded-md p-4">
          {/* Clients */}
          <Link to="/">
           <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <button
          variant="text"
          className="flex items-center gap-1  font-semibold text-md "
        >
         Clients{" "} 
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ml-[4.55rem] ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </button>
      </MenuHandler>
      <MenuList className="">
        <div className="cursor-pointer py-1">
          <p>Client List</p>
        </div>
        <div className="cursor-pointer py-1">
           <p> Add Client</p>
        </div>
   
      </MenuList>
           </Menu>
          </Link>

          {/* Task */}
          <Link to="/example2">
            <div className="mt-5">  
          <Menu open={openMenu1} handler={setOpenMenu1} allowHover >
      <MenuHandler>
        <button
          variant="text"
          className="flex items-center gap-1  font-semibold text-md "
        >
         Task{" "} 
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ml-[5.7rem] ${
              openMenu1 ? "rotate-180" : ""
            }`}
          />
        </button>
      </MenuHandler>
      <MenuList className="">
        <div className="cursor-pointer py-1">
          <p>Client List</p>
        </div>
        <div className="cursor-pointer py-1">
           <p> Add Client</p>
        </div>
   
      </MenuList>
    </Menu>
            </div>
          </Link>

          {/* Attendance*/}
          <div className="mt-5">  
          <Menu open={openMenu2} handler={setOpenMenu2} allowHover >
      <MenuHandler>
        <button
          variant="text"
          className="flex items-center gap-1  font-semibold text-md "
        >
         Attendance{" "} 
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ml-10 ${
              openMenu2 ? "rotate-180" : ""
            }`}
          />
        </button>
      </MenuHandler>
      <MenuList className="">
        <div className="cursor-pointer py-1">
          <p>Client List</p>
        </div>
        <div className="cursor-pointer py-1">
           <p> Add Client</p>
        </div>
   
      </MenuList>
    </Menu>
          </div>

          {/* Report */}
          <div className="mt-5">  
          <Menu open={openMenu3} handler={setOpenMenu3} allowHover >
      <MenuHandler>
        <button
          variant="text"
          className="flex items-center gap-1  font-semibold text-md "
        >
         Report{" "} 
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ml-[4.65rem] ${
              openMenu3 ? "rotate-180" : ""
            }`}
          />
        </button>
      </MenuHandler>
      <MenuList className="">
        <div className="cursor-pointer py-1">
          <p>Client List</p>
        </div>
        <div className="cursor-pointer py-1">
           <p> Add Client</p>
        </div>
   
      </MenuList>
    </Menu>
          </div>

          {/* Accounting */}
          <div className="mt-5">  
          <Menu open={openMenu4} handler={setOpenMenu4} allowHover >
      <MenuHandler>
        <button
          variant="text"
          className="flex items-center gap-1  font-semibold text-md "
        >
         Accounting{" "} 
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ml-[2.35rem] ${
              openMenu4 ? "rotate-180" : ""
            }`}
          />
        </button>
      </MenuHandler>
      <MenuList className="">
        <div className="cursor-pointer py-1">
          <p>Client List</p>
        </div>
        <div className="cursor-pointer py-1">
           <p> Add Client</p>
        </div>
   
      </MenuList>
    </Menu>
          </div>

        </div>
      </div>
    </div>
  );
}
