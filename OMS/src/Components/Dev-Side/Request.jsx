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
  <div>
    <div className="container mt-8 w-[50rem] place-items-center flex">
      <form className="max-w-[50rem] mx-auto bg-white p-8 border border-gray-300 shadow-md rounded-md">
        <h1>Request</h1>
        <div className="flex mb-4">
          <div className="w-1/2 pr-4">
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

          <div className="w-1/2">
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
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-4">
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

          <div className="w-1/2">
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
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 pr-4">
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

          <div className="w-1/2">
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
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-4">
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

        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-full rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div></div>
  
</div>


    
    </>
  );
}

export default  Request;
