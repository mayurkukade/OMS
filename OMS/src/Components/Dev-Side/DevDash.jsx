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
  AccordionBody,  
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
 
export function DevDash() {
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
              <Progress value={50} color="amber" className="w-[40rem]"/>
          </div>
              <p className="ml-2 mt-4">In process</p>
              </td>
      </tr>
    
    <tr className="border-black flex items-center">
        <td className="border-black p-[20px] flex items-center">
           <div>
              <h1>Software Development</h1>
              <Progress value={50} color="amber" className="w-[40rem]"/>
          </div>
              <p className="ml-2 mt-4">Paused</p>
              </td>
      </tr>
    </tbody>
</table>

</div>
      <div className="contain justify-center mt-[2rem] ml-[19rem] w-[47rem]">
            <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`border-b-0 justify-center transition-colors ${
                  open === 1 ? "text-blue-500 hover:!text-blue-700 " : ""
                }`}
              >
              Pending Task
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
              <div className="contain flex justify-center mt-10">
      <table className="h-[7rem] w-[47rem] border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2">Task</th>
            <th className="border border-black p-2">Assigned Task</th>
            <th className="border border-black p-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-black justify-center text-center">
            <td className="border border-black p-2">FE development</td>
            <td className="border border-black p-2">12/09/2024</td>
            <td className="border border-black p-2">21/09/2024</td>
          </tr>
        </tbody>
      </table>
      </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`border-b-0 justify-center transition-colors ${
                  open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
              >
              R7 Work Deadline
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
              <div className="contain flex justify-center mt-10">
      <table className="h-[7rem] w-[47rem] border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2">Task</th>
            <th className="border border-black p-2">Assigned Task</th>
            <th className="border border-black p-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-black justify-center text-center">
            <td className="border border-black p-2">FE development</td>
            <td className="border border-black p-2">12/09/2024</td>
            <td className="border border-black p-2">21/09/2024</td>
          </tr>
        </tbody>
      </table>
      </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 justify-center transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         R30 Work Deadline
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        <div className="contain flex justify-center mt-10">
     <table className="h-[7rem] w-[47rem] border-collapse border border-black">
    <thead>
      <tr>
        <th className="border border-black p-2">Task</th>
        <th className="border border-black p-2">Assigned Task</th>
        <th className="border border-black p-2">Deadline</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border border-black justify-center text-center">
        <td className="border border-black p-2">FE development</td>
        <td className="border border-black p-2">12/09/2024</td>
        <td className="border border-black p-2">21/09/2024</td>
      </tr>
    </tbody>
  </table>


  </div>
        </AccordionBody>
            </Accordion>
      </div>
    </>
  );
}

export default DevDash;
