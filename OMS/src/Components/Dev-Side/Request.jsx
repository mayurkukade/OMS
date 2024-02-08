// MyComponent.js
import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  Alert,
  Input,
  Drawer,
  Card,
 useState 
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CommonNavSide from "./CommonNavSide";
 
export function Request() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  
 
  return (
    <>

<div className="grid grid-flow-col auto-cols-max">
  <div><CommonNavSide /></div>
 
  <div className="container mt-5 w-full md:w-[50rem] mx-auto">
  <form className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-md rounded-md mt-[2rem]">
    <h1 className="text-center mb-4">Request</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
          Leave Request
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
          Reason
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Duration
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
          Start date
        </label>
        <input
          type="Date"
          id="password"
          name="password"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
          End Date 
        </label>
        <input
          type="Date"
          id="firstName"
          name="firstName"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
          Upload Document
        </label>
        <input
          type="file"
          id="lastName"
          name="lastName"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Leave Type
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
    </div>
    <div className="flex justify-center mt-4">
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 px-8 rounded-md hover:bg-blue-700 w-full"
      >
        Submit
      </button>
    </div>
  </form>
</div>

   
    
  
</div>


    
    </>
  );
}

export default  Request;
