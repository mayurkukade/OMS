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
  Progress,
  Checkbox,
  Textarea,
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

export function Ongoingtask() {
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
    <CommonNavSide/>

      <div className="contain flex justify-center  ">
        <table className="h-[10rem] w-[40rem] border-collapse border border-black p-4">
          <thead>
            <tr>
              <th className="border-black">Running task</th>
            </tr>
          </thead>
       
          <tbody>
            <tr className="border-black flex items-center">
              <td className="border-black p-[20px] flex items-center">
                <div>
                  <h1>Website Development</h1>
                  <Progress value={50} color="amber" className="w-[40rem]" />
                </div>
                <p className="ml-2 mt-4">In process</p>
              </td>
            </tr>

            <tr className="border-black flex items-center">
              <td className="border-black p-[20px] flex items-center">
                <div>
                  <h1>Software Development</h1>
                  <Progress value={50} color="amber" className="w-[40rem]" />
                </div>
                <p className="ml-2 mt-4">Paused</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="class flex text-center justify-center mt-[4rem]">
        <h1>Running Tasks</h1>
      </div>
      <div className="container">
        <div class="grid grid-cols-3 gap-2 place-items-center mt-4 justify-center">
          <div class="text-start w-1/4  ">Token Id</div>
          <div class="w-1/2">
            <Input label="Username" />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Start
          </div>

          <div class="text-start w-1/4">Due Date</div>
          <div class="w-1/2">
            <Input label="Username" />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Submit
          </div>

          <div class="text-start w-1/4">Project Name</div>
          <div class="w-1/2">
            <Input label="Username" />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Pending/Pause
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-2">
        <div className="name text-center ml-[-2.8rem]">Description</div>
        <div className="description flex justify-center ml-[6.5rem]">
          <Textarea className="col-span-2 " />
        </div><br></br>
      </div>
      <div className="grid grid-cols-3 mt-2">
        <div className="name text-center ml-[-2.8rem]">Comments</div>
        <div className="Comments flex justify-center ml-[6.5rem]">
          <Textarea className="col-span-2 " />
        </div><br></br>
      </div>
      <div className=" flex button justify-center place-items-center mt-2 ">
          <button class="bg-green-500 p-2 rounded-lg hover:bg-blue-300 text-white">
            Save changes
          </button>
        </div>

<div className="border border-black p-4 mt-[2rem]">
      <div className="container mt-[2rem]">
        <div class="grid grid-cols-3 gap-2 place-items-center mt-4 justify-center">
          <div class="text-start w-1/4  ">Token Id</div>
          <div class="w-1/2">
            <Input label="Username" />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Start
          </div>

          <div class="text-start w-1/4">Due Date</div>
          <div class="w-1/2">
            <Input label="Username" />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Submit
          </div>

          <div class="text-start w-1/4">Project Name</div>
          <div class="w-1/2">
            <Input label="Username" />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Pending/Pause
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-2 ">
        <div className="name text-center ml-[-2.8rem]">Description</div>
        <div className="description justify-start ml-[7rem]">
          <Textarea className="col-span-2 "  />
        </div>
      </div>
     

      <div className=" flex button justify-center place-items-center mt-2 space-x-2">
          <button class="bg-blue-500 p-2 rounded-lg hover:bg-red-300 text-white">
          Cancel
          </button>
          <button class="bg-green-500 p-2 rounded-lg hover:bg-blue-300 text-white">
            Save changes
          </button>
        </div>
        </div>
    </>
  );
}

export default Ongoingtask;
